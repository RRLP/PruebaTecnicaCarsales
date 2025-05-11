using System.Text.Json.Serialization;

namespace Api.Models
{
    public class EpisodeResponse
    { 
        public Info? info { get; set; } = new Info();
         
        public List<Episode>? results { get; set; } = new List<Episode>();


    }
}
