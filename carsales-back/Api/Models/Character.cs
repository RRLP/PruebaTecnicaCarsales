namespace Api.Models
{
    public class Character
    {
        public int id { get; set; } = 0;
        public string name { get; set; } = "";
        public string status { get; set; } = "";
        public string species { get; set; } = "";
        public string type { get; set; } = "";
        public string gender { get; set; } = "";
        public Origin origin { get; set; } = new Origin();
        public Location location { get; set; } = new Location();
        public string image { get; set; } = "";
        public string[] episode { get; set; } = new string[0];
        public string url { get; set; } = "";
        public string created { get; set; } = "";
    }
}
