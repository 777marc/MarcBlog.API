using System.ComponentModel.DataAnnotations;

namespace MarcBlog.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must sprcify a pasword between 4 and 8 characters long.")]
        public string Password { get; set; }        
    }
}