using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using api.Models;
using Microsoft.Azure.Cosmos;
using Microsoft.Extensions.Configuration;

namespace api.Services
{
    public interface IContactService
    {
        Task<string> AddContactFormAsync(ContactForm contactForm);
    }

    public class CosmosDbService : IContactService
    {
        private readonly Container? _container;
        private readonly bool _isMock;
        private readonly List<ContactForm> _mockStorage = new List<ContactForm>();

        public CosmosDbService(CosmosClient? cosmosClient, string? databaseName, string? containerName)
        {
            if (cosmosClient == null || databaseName == null || containerName == null)
            {
                _isMock = true;
                return;
            }

            _container = cosmosClient.GetContainer(databaseName, containerName);
            _isMock = false;
        }

        public async Task<string> AddContactFormAsync(ContactForm contactForm)
        {
            if (_isMock)
            {
                _mockStorage.Add(contactForm);
                Console.WriteLine($"Mock: Stored contact form with email: {contactForm.Email}");
                return contactForm.Id;
            }
            
            var response = await _container!.CreateItemAsync(contactForm, new PartitionKey(contactForm.Id));
            return response.Resource.Id;
        }
    }

    public static class CosmosDbServiceExtensions
    {
        public static IServiceCollection AddCosmosDb(this IServiceCollection services, IConfiguration configuration)
        {
            try
            {
                var accountEndpoint = configuration["CosmosDb:AccountEndpoint"];
                var accountKey = configuration["CosmosDb:AccountKey"];
                var databaseName = configuration["CosmosDb:DatabaseName"];
                var containerName = configuration["CosmosDb:ContainerName"];

                if (string.IsNullOrEmpty(accountEndpoint) || string.IsNullOrEmpty(accountKey) ||
                    string.IsNullOrEmpty(databaseName) || string.IsNullOrEmpty(containerName))
                {
                    Console.WriteLine("Cosmos DB configuration is missing or incomplete. Using mock storage for development.");
                    services.AddSingleton<IContactService>(new CosmosDbService(null, null, null));
                    return services;
                }

                var clientOptions = new CosmosClientOptions
                {
                    SerializerOptions = new CosmosSerializationOptions
                    {
                        PropertyNamingPolicy = CosmosPropertyNamingPolicy.CamelCase
                    }
                };

                var client = new CosmosClient(accountEndpoint, accountKey, clientOptions);
                var database = client.CreateDatabaseIfNotExistsAsync(databaseName).GetAwaiter().GetResult();
                var container = database.Database.CreateContainerIfNotExistsAsync(containerName, "/id").GetAwaiter().GetResult();

                services.AddSingleton(client);
                services.AddSingleton<IContactService>(new CosmosDbService(client, databaseName, containerName));
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error configuring Cosmos DB: {ex.Message}. Using mock storage for development.");
                services.AddSingleton<IContactService>(new CosmosDbService(null, null, null));
            }

            return services;
        }
    }
}
