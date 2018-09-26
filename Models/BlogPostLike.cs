using System;

namespace MarcBlog.API.Models
{
    public class BlogPostLike
    {
        public int Id { get; set; }
        public int Blogpost_Id { get; set; }
        public DateTime DateCreated { get; set; }
        public bool Active { get; set; }
    }
}