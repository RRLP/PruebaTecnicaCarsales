using Api.Interfaces;
using Api.Models;
using System.Text.Json;

namespace Api.Services
{
    public class CharacterService:ICharacterApi
    {
        private readonly HttpClient _httpClient;

        public CharacterService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<Character>> getCharacters(string ids="") {
            List<Character> characters = new List<Character>(); 

            try {
                string urlCharacters = "https://rickandmortyapi.com/api/character/";
                HttpResponseMessage http_get = await _httpClient.GetAsync(urlCharacters + ids);

                string resp = await http_get.Content.ReadAsStringAsync();
                characters = JsonSerializer.Deserialize<List<Character>>(resp);
            }catch (Exception ex) { 
            
            }

            return characters;
        }
    }
}
