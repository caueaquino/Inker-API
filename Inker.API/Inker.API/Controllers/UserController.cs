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
    [ApiController]
    public class UserController : ControllerBase
    {

        [HttpGet]
        [ProducesResponseType(statusCode: 200, Type = typeof(List<User>))]
        public ActionResult<IEnumerable<User>> Get()
        {
            var ListUser = UserDataBase.GetListUser();
            if (ListUser == null)
            {
                return BadRequest();
            }
            return Ok(ListUser);
        }


        [HttpGet("{email}")]
        public ActionResult<User> Get(string email)
        {
            try
            {
                var AuxUser = UserDataBase.GetUser(email).First();
                if (AuxUser == null)
                {
                    return BadRequest();
                }
                return Ok(AuxUser);
            }
            catch (InvalidOperationException)
            {
                return NotFound();
            }
        }


        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            if (ModelState.IsValid)
            {
                if (!UserDataBase.AddUser(user))
                {
                    return BadRequest();
                }
                return Created(Url.Action("Post", user.Email), user);
            }
            return BadRequest();
        }


        [HttpPut("{email}")]
        public IActionResult Put([FromBody] User user)
        {
            if (ModelState.IsValid)
            {
                if (!UserDataBase.UpdateUser(user))
                {
                    return BadRequest();
                }
                return Ok(user);
            }
            return BadRequest();
        }


        [HttpDelete("{email}")]
        public IActionResult Delete(string email)
        {
            var AuxUser = UserDataBase.GetUser(email);
            if (AuxUser == null)
            {
                return NotFound();
            }
            else if (!UserDataBase.DeleteUser(email))
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
