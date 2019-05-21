using System;
using System.Collections.Generic;
using System.Text;

namespace Inker.API.Model
{
    public class Publication
    {
        public int Id { get; }
        public string EmailUser { get; set; }
        public int IdStudyArea { get; set; }
        public bool IsImage { get; set; }
        public bool IsVideo { get; set; }
        public string Text { get; set; }
        public DateTime CreationDate { get; set; }

        public Publication(int id, string emailUser, int idStudyArea, bool isImage, bool isVideo, string text, DateTime creationDate)
        {
            Id = id;
            EmailUser = emailUser;
            IdStudyArea = idStudyArea;
            IsImage = isImage;
            IsVideo = isVideo;
            Text = text;
            CreationDate = creationDate;
        }
    }
}
