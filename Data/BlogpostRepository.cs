using System;
using System.Collections.Generic;
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

        public async Task<List<BlogPost>> GetAllBlogPosts()
        {
            return await _context.BlogPosts.ToListAsync();
        }
        public async Task<BlogPost> GetBlogPost(int id)
        {
            return await _context.BlogPosts.FirstOrDefaultAsync(v => v.Id == id);
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
            blogPost.Likes = UpdateBlogpost.Likes;

            await _context.SaveChangesAsync();
            
            return UpdateBlogpost;
        }

        public async Task<Boolean> DeleteBlogPost(int id)
        {
            try {
                var blogPost = await _context.BlogPosts.FirstOrDefaultAsync(v => v.Id == id);
                _context.Remove(blogPost);
                _context.SaveChanges();
                return true;
            }
            catch(Exception) {
                return false;
            }
        }

        public async Task<Boolean> AddLike(int id)
        {
            BlogPost blogpost = await _context.BlogPosts.FirstOrDefaultAsync(bp => bp.Id == id);
            blogpost.Likes = blogpost.Likes + 1;
            _context.Update(blogpost);
            _context.SaveChanges();

            return true;
        }

    }
}