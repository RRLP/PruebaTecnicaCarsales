using System.Text.Json.Serialization;

namespace Api.Models
{
    public class Info
    {
        public int count { get; set; } = 0;
        public string? next { get; set; } = "";
        public int pages { get; set; } = 0;
        public string? prev { get; set; } = "";
    }
}
