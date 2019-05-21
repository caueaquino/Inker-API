using Dapper;
using Inker.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Inker.API.Controller
{
    public static class CommentDataBase
    {
        public static IList<Comment> GetPublicationComments(int idPublication)
        {
            try
            {
                return DataBase.cnn.Query<Comment>($"SELECT * FROM comment WHERE id_publication = {idPublication} DESC").ToList();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IList<Comment> GetComment(int id)
        {
            try
            {
                return DataBase.cnn.Query<Comment>($"SELECT * FROM comment WHERE id = {id}").ToList();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static bool AddComment(Comment comment)
        {
            try
            {
                DataBase.cnn.Query("INSERT INTO comment (id_publication, email_user, text) VALUES (@IdPublication, @EmailUser, @Text)", comment);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public static bool DeleteComment(int id)
        {
            try
            {
                DataBase.cnn.Query($"DELETE FROM comments WHERE id = {id}");
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
