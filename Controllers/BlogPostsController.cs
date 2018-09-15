using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MarcBlog.API.Data;
using MarcBlog.API.Dtos;
using MarcBlog.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MarcBlog.API.Controllers
{
    [Route("api/[controller]")]
    public class BlogPostsController : Controller
    {
        private readonly IBlogpostRepository _repo;
        public DataContext _context { get; }
        public BlogPostsController(DataContext context, IBlogpostRepository repo)
        {
            _context = context;
            _repo = repo;
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
        
        [HttpPost]
        public async Task<IActionResult> NewBlogPost([FromBody] BlogpostForNewPostDto blogpostForNewPostDto) 
        {
            var blogpostToCreate = new BlogPost {
                Title = blogpostForNewPostDto.Title,
                Description = blogpostForNewPostDto.Description,
                Body = blogpostForNewPostDto.Body,
                Category = blogpostForNewPostDto.Category,
                DateCreated = DateTime.Now,
                Author = "Marc Mendoza",
                Active = true
            };
            await _repo.NewBlogpost(blogpostToCreate);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogPost(int id)
        {
            var blogPost = await _context.BlogPosts.FirstOrDefaultAsync(v => v.Id == id);
            _context.Remove(blogPost);
            _context.SaveChanges();
            return Ok();
        }      
        
    }
}