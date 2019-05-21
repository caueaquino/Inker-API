using System;
using System.Collections.Generic;
using System.Text;

namespace Inker.API.Model
{
    public class Comment
    {
        public int Id { get; }
        public int IdPublication { get; set; }
        public string EmailUser { get; set; }
        public string Text { get; set; }
        public DateTime CommentDate { get; set; }

        public Comment(int id, int idPublication, string emailUser, string text, DateTime commentDate)
        {
            Id = id;
            IdPublication = idPublication;
            EmailUser = emailUser;
            Text = text;
            CommentDate = commentDate;
        }
    }
}
