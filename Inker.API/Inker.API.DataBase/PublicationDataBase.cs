using Dapper;
using Inker.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Inker.API.Controller
{
    public static class PublicationDataBase
    {
        public static IList<Publication> GetAreaPublications(int idStudyArea)
        {
            try
            {
                return DataBase.cnn.Query<Publication>($"SELECT * FROM publication WHERE id_study_area = {idStudyArea} DESC").ToList();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IList<Publication> GetPublication(int id)
        {
            try
            {
                return DataBase.cnn.Query<Publication>($"SELECT * FROM publication WHERE id = {id}").ToList();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static bool AddPublication(Publication publication)
        {
            try
            {
                DataBase.cnn.Query("INSERT INTO publication (email_user, id_study_area, is_image, is_video, text) VALUES (@EmailUser, @IdStudyArea, @IsImage, @IsVideo, @Text)", publication);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public static bool DeletePublication(int id)
        {
            try
            {
                DataBase.cnn.Query($"DELETE FROM publication WHERE id = {id}");
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
