using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inker.API.Controller;
using Inker.API.Model;
using Microsoft.AspNetCore.Mvc;

namespace Inker.API.Controllers
{
    [Route("api/[controller]")]
    public class PublicationController : ControllerBase
    {

        [HttpGet("{id}")]
        [ProducesResponseType(statusCode: 200, Type = typeof(List<Publication>))]
        public ActionResult<IEnumerable<Publication>> Get(int id)
        {
            try
            {
                var ListPublication = PublicationDataBase.GetAreaPublications(id);
                if (ListPublication == null)
                {
                    return BadRequest();
                }
                return Ok(ListPublication);
            }
            catch (InvalidOperationException)
            {
                return NotFound();  
            }
        }


        [HttpPost]
        public IActionResult Post([FromBody] Publication publication)
        {
            if (ModelState.IsValid)
            {
                if (!PublicationDataBase.AddPublication(publication))
                {
                    return BadRequest();
                }
                return Created(Url.Action("Post", publication.Id), publication);
            }
            return BadRequest();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var AuxPublication = PublicationDataBase.GetPublication(id);
            if (AuxPublication == null)
            {
                return NotFound();
            }
            else if (!PublicationDataBase.DeletePublication(id))
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
