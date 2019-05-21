using System;
using System.Collections.Generic;
using System.Text;

namespace Inker.API.Model
{
    public class StudyArea
    {
        public int Id { get; }
        public string Name { get; }

        public StudyArea(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
