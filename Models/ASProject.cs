using System;

namespace MarcBlog.API.Models
{
    public class ASProject
    {
        public int Id { get; set; }
        public string ProjectName { get; set; }
        public string Description { get; set; }
        public string GitHubLink { get; set; }
        public string LiveSiteLink { get; set; }
        public DateTime  DateCreated { get; set; }
    }
}