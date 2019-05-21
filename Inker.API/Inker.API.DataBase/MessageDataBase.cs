using Dapper;
using Inker.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Inker.API.Controller
{
    public static class MessageDataBase
    {
        public static  IList<Message> GetMessages(int idChat)
        {
            try
            {
                return DataBase.cnn.Query<Message>($"SELECT * FROM message WHERE id_chat = {idChat}").ToList();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IList<Message> GetMessage(int id)
        {
            try
            {
                return DataBase.cnn.Query<Message>($"SELECT * FROM message WHERE id = {id}").ToList();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static bool AddMessage(Message message)
        {
            try
            {
                DataBase.cnn.Query("INSERT INTO  message (id_chat, email_user, text) VALUES (@IdChat, @EmailUser, @Text)", message);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public static bool DeleteMessage(int id)
        {
            try
            {
                DataBase.cnn.Query($"DELETE FROM message WHERE id = {id}");
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
