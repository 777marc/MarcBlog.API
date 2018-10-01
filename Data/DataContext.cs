using MarcBlog.API.Models;
using Microsoft.EntityFrameworkCore;

namespace MarcBlog.API.Data
{
    public class DataContext : DbContext
    {
        private readonly DbContextOptions<DataContext> _options;
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
        public DbSet<BlogPost> BlogPosts { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<ASProject> ASProjects  { get; set; }
    }
}