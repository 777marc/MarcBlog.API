using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MarcBlog.API.Models;

namespace MarcBlog.API.Data
{
    public interface IASProjectsRepository
    {
      Task<List<ASProject>> GetAllProjects();
      Task<ASProject> GetProject(int id);
      Task<ASProject> AddProject(ASProject project);
      Task<ASProject> UpdateProject(ASProject project);
      Task<Boolean> DeleteProject(int id);
    }
}