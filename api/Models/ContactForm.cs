using System;
using Newtonsoft.Json;

namespace api.Models
{
    public class ContactForm
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        
        [JsonProperty(PropertyName = "email")]
        public string? Email { get; set; }
        
        [JsonProperty(PropertyName = "createdAt")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
