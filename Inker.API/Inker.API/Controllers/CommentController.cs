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
    public class CommentController : ControllerBase
    {

        [HttpGet("{id}")]
        [ProducesResponseType(statusCode: 200, Type = typeof(List<Comment>))]
        public ActionResult<IEnumerable<Comment>> Get(int id)
        {
            var ListComment = CommentDataBase.GetPublicationComments(id);
            if (ListComment == null)
            {
                return BadRequest();
            }
            return Ok(ListComment);
        }


        [HttpPost]
        public IActionResult Post([FromBody] Comment comment)
        {
            if (ModelState.IsValid)
            {
                if (!CommentDataBase.AddComment(comment))
                {
                    return BadRequest();
                }
                return Created(Url.Action("Post", comment.Id), comment);
            }
            return BadRequest();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var AuxComment = CommentDataBase.GetComment(id);
            if (AuxComment == null)
            {
                return NotFound();
            }
            else if (!CommentDataBase.DeleteComment(id))
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
