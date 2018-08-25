using System;
using System.Threading.Tasks;
using MarcBlog.API.Data;
using MarcBlog.API.Models;
using Microsoft.EntityFrameworkCore;

namespace MarcBlog.API.Data
{
    public class BlogpostRepository : IBlogpostRepository
    {
        private readonly DataContext _context;
        public BlogpostRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<BlogPost> NewBlogpost(BlogPost newBlogpost)
        {
            await _context.BlogPosts.AddAsync(newBlogpost);
            await _context.SaveChangesAsync();
            return newBlogpost;
        }
    }
}