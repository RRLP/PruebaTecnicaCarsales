namespace Api.Models
{
    public class SingleLocation
    {
        public int number { get; set; } = 0;
        public string name { get; set; } = "";
        public string type { get; set; } = "";
        public string dimension { get; set; } = "";
        public string[] residents { get; set; } = new string[0];
    }
}
