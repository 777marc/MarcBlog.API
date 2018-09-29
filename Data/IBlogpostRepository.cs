using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MarcBlog.API.Models;

namespace MarcBlog.API.Data
{
    public interface IBlogpostRepository
    {
        Task<List<BlogPost>> GetAllBlogPosts();
        Task<BlogPost> GetBlogPost(int id);
        Task<Boolean> DeleteBlogPost(int id);
        Task<BlogPost> NewBlogpost(BlogPost newBlogpost);
        Task<BlogPost> UpdateBlogpost(BlogPost UpdateBlogpost);
        Task<Boolean> AddLike(int id);
    }
}