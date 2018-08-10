using MarcBlog.API.Models;
using Microsoft.EntityFrameworkCore;

namespace MarcBlog.API.Data
{
    public class DataContext : DbContext
    {
        private readonly DbContextOptions<DataContext> _options;
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
        public DbSet<Value> Values { get; set; }
        public DbSet<BlogPost> BlogPosts { get; set; }
    }
}