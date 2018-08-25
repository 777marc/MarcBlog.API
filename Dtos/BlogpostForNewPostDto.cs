using System;
using System.ComponentModel.DataAnnotations;

namespace MarcBlog.API.Dtos
{
    public class BlogpostForNewPostDto
    {
        public int Id { get; set; }
        public bool Active { get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public string Body { get; set; }
        public string Category { get; set; }        
        public DateTime DateCreated { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Title { get; set; }
    }
}