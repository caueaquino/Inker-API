using Dapper;
using Inker.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Inker.API.Controller
{
    public static class ChatDataBase
    {
        public static IList<Chat> GetUserChats(string email)
        {
            try
            {
                return DataBase.cnn.Query<Chat>($"SELECT * FROM chat WHERE email_user_a = {email} or email_user_b = {email}").ToList();
            }
            catch (Exception)
            {
                return null;
            }
        }
        public static IList<Chat> GetChat(int id)
        {
            try
            {
                return DataBase.cnn.Query<Chat>($"SELECT * FROM chat WHERE id = {id}").ToList();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static bool AddChat(Chat chat)
        {
            try
            {
                DataBase.cnn.Query("INSERT INTO chat (email_user_a, email_user_b) VALUES (@EmailUserA, @EmailUserB)", chat);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public static bool DeleteChat(int id)
        {
            try
            {
                DataBase.cnn.Query($"DELETE FROM chat WHERE id = {id}");
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
