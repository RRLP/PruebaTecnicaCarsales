namespace Api.Models
{
    public class LocationResponse
    {
        public Info info { get; set; }
        public SingleLocation[] results { get; set; }
    }
}
