using Application.Activities;
// using Application.Core;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ActivityDomain = Domain.Activity;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
       

        [HttpGet]
        public async Task<ActionResult<List<ActivityDomain>>> GetActivities()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ActivityDomain>> GetActivity(Guid id)
        {
            

            return await Mediator.Send(new Details.Query{Id = id});
        }

         [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            await Mediator.Send(new Create.Command { Activity = activity });
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        {
            await Mediator.Send(new Details.Query { Id = id });
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            await Mediator.Send(new Delete.Command { Id = id });
            return Ok();
        }
    }
}
