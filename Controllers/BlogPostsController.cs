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
        public BlogPostsController(IBlogpostRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetBlogPosts()
        {
            var blogPosts = await _repo.GetAllBlogPosts();
            return Ok(blogPosts);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBlogPost(int id)
        {
            var blogPost = await _repo.GetBlogPost(id);
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

        [HttpPut]
        public async Task<IActionResult> UpdateBlogPost([FromBody] BlogpostForNewPostDto blogpostForNewPostDto) 
        {
          
            var blogpostToUpdate = new BlogPost {
                Id = blogpostForNewPostDto.Id,
                Title = blogpostForNewPostDto.Title,
                Description = blogpostForNewPostDto.Description,
                Body = blogpostForNewPostDto.Body,
                Category = blogpostForNewPostDto.Category,
                DateCreated = DateTime.Now,
                Author = "Marc Mendoza",
                Active = true
            };

            await _repo.UpdateBlogpost(blogpostToUpdate);
            
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogPost(int id)
        {
            var result = await _repo.DeleteBlogPost(id);
            return Ok();
        }      

        [HttpPost("{id}")]
        public async Task<IActionResult> AddLike(int id)
        {
            await _repo.AddLike(id);
            return Ok();
        }
        
    }
}