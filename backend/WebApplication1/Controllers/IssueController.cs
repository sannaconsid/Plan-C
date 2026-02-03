using Business.Data;
using Business.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace EmberWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IssueController(IssueService issueService) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetIssues(CancellationToken cancellationToken)
        {
            var issues = await issueService.GetAllIssuesAsync(cancellationToken);
            return new OkObjectResult(issues);
        }

        [HttpPost]
        public async Task<IActionResult> CreateIssue([FromBody] SaveIssueDto issue, CancellationToken cancellationToken)
        {
            await issueService.AddIssue(issue, cancellationToken);
            return new OkResult();
        }
    }
}
