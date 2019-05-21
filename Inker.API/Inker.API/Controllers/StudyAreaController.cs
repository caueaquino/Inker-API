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
    public class StudyAreaController : ControllerBase
    {

        [HttpGet]
        [ProducesResponseType(statusCode: 200, Type = typeof(List<StudyArea>))]
        public ActionResult<IEnumerable<StudyArea>> Get()
        {
            var ListStudyArea = StudyAreaDataBase.GetListStudyArea();
            if (ListStudyArea == null)
            {
                return BadRequest();
            }
            return Ok(ListStudyArea);
        }
    }
}
