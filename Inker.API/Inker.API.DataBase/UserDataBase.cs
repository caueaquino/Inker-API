using Dapper;
using Inker.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Inker.API.Controller
{
    public static class UserDataBase
    {
        public static IList<User> GetListUser()
        {
            try
            {
                return DataBase.cnn.Query<User>("SELECT * FROM user").ToList();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IList<User> GetUser(string email)
        {
            try
            {
                return DataBase.cnn.Query<User>($"SELECT * FROM user WHERE email = {email}").ToList();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static bool AddUser(User user)
        {
            try
            {
                DataBase.cnn.Query("INSERT INTO user (email, password, id_study_area, name, last_name, age, phone, avatar) VALUES (@Email, @Password, @IdStudyArea, @Name, @LastName, @Age, @Phone, @Avatar)", user);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        
        public static bool UpdateUser(User user)
        {
            try
            {
                DataBase.cnn.Query("UPDATE user SET password = @password, id_study_area = @IdStudyArea, name = @name, last_name = @LastName, age = @Age, phone = @Phone, avatar = @Avatar WHERE email = @Email", user);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public static bool DeleteUser(string email)
        {
            try
            {
                DataBase.cnn.Query($"DELETE FROM user WHERE email = {email}");
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
