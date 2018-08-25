using System.Threading.Tasks;
using MarcBlog.API.Models;

namespace MarcBlog.API.Data
{
    public interface IBlogpostRepository
    {
         Task<BlogPost> NewBlogpost(BlogPost newBlogpost);
    }
}