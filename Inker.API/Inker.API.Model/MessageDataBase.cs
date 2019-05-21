using System;
using System.Collections.Generic;
using System.Text;

namespace Inker.API.Model
{
    public class Message
    {
        public int Id { get; }
        public int IdChat { get; set; }
        public string EmailUser { get; set; }
        public string Text { get; set; }
        public DateTime MessageTime { get; }

        public Message(int id, int idChat, string emailUser, string text, DateTime messageTime)
        {
            Id = id;
            IdChat = idChat;
            EmailUser = emailUser;
            Text = text;
            MessageTime = messageTime;
        }
    }
}
