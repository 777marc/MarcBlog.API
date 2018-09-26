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
        public async Task<BlogPost> UpdateBlogpost(BlogPost UpdateBlogpost)
        {
            var blogPost = await _context.BlogPosts.FirstOrDefaultAsync(v => v.Id == UpdateBlogpost.Id);

            blogPost.Title = UpdateBlogpost.Title;
            blogPost.Description = UpdateBlogpost.Description;
            blogPost.Category = UpdateBlogpost.Category;
            blogPost.Body = UpdateBlogpost.Body;

            await _context.SaveChangesAsync();
            
            return UpdateBlogpost;
        }

        public async Task<Boolean> AddLike(int id)
        {
            BlogPostLike newLike = new BlogPostLike();
            newLike.Blogpost_Id = id;
            newLike.DateCreated = DateTime.Now;
            newLike.Active = true;
            await _context.BlogPostLikes.AddAsync(newLike);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}