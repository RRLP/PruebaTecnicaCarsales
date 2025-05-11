namespace Api.Models
{
    public class LocationResponse
    {
        public Info info { get; set; } = new Info();
        public SingleLocation[] results { get; set; } = new SingleLocation[0];
    }
}
