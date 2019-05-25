using System;

namespace Inker.API.Model
{
    public class User
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public int IdStudyArea { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public int Phone { get; set; }
        public string Avatar { get; set; }

        public User(string email, string password, int idStudyArea, string name, string lastName, int age, int phone, string avatar)
        {
            Email = email;
            Password = password;
            IdStudyArea = idStudyArea;
            Name = name;
            LastName = lastName;
            Age = age;
            Phone = phone;
            Avatar = avatar;
        }
    }
}
