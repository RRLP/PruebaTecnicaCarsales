using System.Text.Json.Serialization;

namespace Api.Models
{
    public class Info
    {
        public int count { get; set; }
        public string? next { get; set; }
        public int pages { get; set; }
        public string? prev { get; set; }
    }
}
