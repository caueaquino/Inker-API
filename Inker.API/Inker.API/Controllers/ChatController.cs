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
    public class ChatController : ControllerBase
    {

        [HttpGet("{email}")]
        [ProducesResponseType(statusCode: 200, Type = typeof(List<Chat>))]
        public ActionResult<IEnumerable<Chat>> Get(string email)
        {
            var ListChat = ChatDataBase.GetUserChats(email);
            if (ListChat == null)
            {
                return BadRequest();
            }
            return Ok(ListChat);
        }


        [HttpGet("{id}")]
        public ActionResult<Chat> Get(int id)
        {
            try
            {
                var AuxChat = ChatDataBase.GetChat(id).First();
                if (AuxChat == null)
                {
                    return BadRequest();
                }
                return Ok(AuxChat);
            }
            catch (InvalidOperationException)
            {
                return NotFound();
            }
        }


        [HttpPost]
        public IActionResult Post([FromBody] Chat chat)
        {
            if (ModelState.IsValid)
            {
                if (!ChatDataBase.AddChat(chat))
                {
                    return BadRequest();
                }
                return Created(Url.Action("Post", chat.Id), chat);
            }
            return BadRequest();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var AuxChat = ChatDataBase.GetChat(id);
            if (AuxChat == null)
            {
                return NotFound();
            }
            else if (!ChatDataBase.DeleteChat(id))
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
