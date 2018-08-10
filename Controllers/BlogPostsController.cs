using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MarcBlog.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MarcBlog.API.Controllers
{
    [Route("api/[controller]")]
    public class BlogPostsController : Controller
    {
        public DataContext _context { get; }

        public BlogPostsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetBlogPosts()
        {
            var blogPosts = await _context.BlogPosts.ToListAsync();
            return Ok(blogPosts);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBlogPost(int id)
        {
            var blogPost = await _context.BlogPosts.FirstOrDefaultAsync(v => v.Id == id);
            return Ok(blogPost);
        }        
        
    }
}