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
    public class MessageController : ControllerBase
    {

        [HttpGet("{id}")]
        [ProducesResponseType(statusCode: 200, Type = typeof(List<Message>))]
        public ActionResult<IEnumerable<Message>> Get(int id)
        {
            var ListMessage = MessageDataBase.GetMessages(id);
            if (ListMessage == null)
            {
                return BadRequest();
            }
            return Ok(ListMessage);
        }


        [HttpPost]
        public IActionResult Post([FromBody] Message message)
        {
            if (ModelState.IsValid)
            {
                if (!MessageDataBase.AddMessage(message))
                {
                    return BadRequest();
                }
                return Created(Url.Action("Post", message.Id), message);
            }
            return BadRequest();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var AuxMessage = MessageDataBase.GetMessage(id);
            if (AuxMessage == null)
            {
                NotFound();
            }
            else if (!MessageDataBase.DeleteMessage(id))
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
