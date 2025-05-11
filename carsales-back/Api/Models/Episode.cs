using System.Text.Json.Serialization;

namespace Api.Models
{
    public class Episode
    {
        public int id { get; set; } = 0;

        public string name { get; set; } = "";
         
        public string air_date { get; set; } = "";

        public string episode { get; set; } = "";

        public List<string> characters { get; set; } = new List<string>();
         
        public string url { get; set; } = "";
         
        public DateTime created { get; set; }
    }
}
