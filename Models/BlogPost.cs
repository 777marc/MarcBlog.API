using System;

namespace MarcBlog.API.Models
{
    public class BlogPost
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Body { get; set; }
        public string Author { get; set; }
        public DateTime DateCreated { get; set; }
        public bool Active { get; set; }
        public int Likes { get; set; }
    }
}