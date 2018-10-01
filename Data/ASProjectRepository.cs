using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MarcBlog.API.Models;
using Microsoft.EntityFrameworkCore;

namespace MarcBlog.API.Data
{
  public class ASProjectRepository : IASProjectsRepository
  {
    private readonly DataContext _context;
    public ASProjectRepository(DataContext context)
    {
        this._context = context;
    }

    public async Task<List<ASProject>> GetAllProjects()
    {
        return await _context.ASProjects.ToListAsync();
    }

    public async Task<ASProject> GetProject(int id)
    {
      return await _context.ASProjects.FirstOrDefaultAsync(a => a.Id == id);
    }

    public async Task<ASProject> AddProject(ASProject project)
    {
      await _context.ASProjects.AddAsync(project);
      await _context.SaveChangesAsync();
      return project;      
    }

    public async Task<ASProject> UpdateProject(ASProject project)
    {
      var asProject = await _context.ASProjects.FirstOrDefaultAsync(a => a.Id == project.Id);
      
      asProject.ProjectName = project.ProjectName;
      asProject.Description = project.Description;
      asProject.GitHubLink = project.GitHubLink;
      asProject.LiveSiteLink = project.LiveSiteLink;

      await _context.SaveChangesAsync();
      return project;      
    }


    public async Task<Boolean> DeleteProject(int id)
    {
      try {
        var asProject = await _context.ASProjects.FirstOrDefaultAsync(a => a.Id == id);
        _context.Remove(asProject);
        _context.SaveChanges();
        return true;
      }
      catch(Exception) {
        return false;
      }
    }

  }
}