using System;
using System.Collections.Generic;
using System.Text;

namespace Inker.API.Model
{
    public class Chat
    {
        public int Id { get; }
        public string EmailUserA { get; set; }
        public string EmailUserB { get; set; }
        public DateTime LastMessage { get; }

        public Chat(int id, string emailUserA, string emailUserB, DateTime lastMessage)
        {
            Id = id;
            EmailUserA = emailUserA;
            EmailUserB = emailUserB;
            LastMessage = lastMessage;
        }
    }
}
