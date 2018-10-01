using System;
using System.Threading.Tasks;
using MarcBlog.API.Data;
using MarcBlog.API.Dtos;
using MarcBlog.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace MarcBlog.API.Controllers
{
    [Route("api/[controller]")]
    public class ASProjectsController : Controller
    {
        private readonly IASProjectsRepository _repo;
        public ASProjectsController(IASProjectsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetASProjects()
        {
            var asProjects = await _repo.GetAllProjects();
            return Ok(asProjects);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetASProject(int id)
        {
            var asProject = await _repo.GetProject(id);
            return Ok(asProject);
        }

        [HttpPost]
        public async Task<IActionResult> AddProject([FromBody] ASProjectForNewProjectDto project)
        {
            var asProject = new ASProject {
                ProjectName = project.ProjectName,
                Description = project.Description,
                GitHubLink = project.GitHubLink,
                LiveSiteLink = project.LiveSiteLink,
                DateCreated = DateTime.Now
            };
            var result = await _repo.AddProject(asProject);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateProject([FromBody] ASProjectForNewProjectDto project)
        {
            var asProject = new ASProject {
                Id = project.Id,
                ProjectName = project.ProjectName,
                Description = project.Description,
                GitHubLink = project.GitHubLink,
                LiveSiteLink = project.LiveSiteLink,
                DateCreated = DateTime.Now
            };
            var result = await _repo.UpdateProject(asProject);
            return Ok(result);
        }        

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject(int id)
        {
            var result = await _repo.DeleteProject(id);
            return Ok(result);
        }
    }
}