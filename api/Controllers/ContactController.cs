using System;
using System.Threading.Tasks;
using api.Models;
using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;
        private readonly ILogger<ContactController> _logger;

        public ContactController(IContactService contactService, ILogger<ContactController> logger)
        {
            _contactService = contactService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ContactFormRequest request)
        {
            if (string.IsNullOrEmpty(request.Email))
            {
                return BadRequest("Email is required");
            }

            try
            {
                var contactForm = new ContactForm
                {
                    Email = request.Email
                };

                var id = await _contactService.AddContactFormAsync(contactForm);
                _logger.LogInformation($"Contact form with email {request.Email} submitted successfully");

                return Ok(new { id });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error submitting contact form: {ex.Message}");
                return StatusCode(500, "An error occurred while processing your request");
            }
        }
    }

    public class ContactFormRequest
    {
        public string? Email { get; set; }
    }
}
