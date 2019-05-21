using System;
using System.Data.SqlClient;

namespace Inker.API.Controller
{
    public static class DataBase
    {
        public static SqlConnection cnn = new SqlConnection("Data Source=localhost; Initial Catalog=inker; Integrated Security=false; User ID=sa;Password=abc123##");
    }
}
