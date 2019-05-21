using Dapper;
using Inker.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Inker.API.Controller
{
    public static class StudyAreaDataBase
    {
        public static IList<StudyArea> GetListStudyArea()
        {
            try
            {
                return DataBase.cnn.Query<StudyArea>("SELECT * FROM study_area").ToList();
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
