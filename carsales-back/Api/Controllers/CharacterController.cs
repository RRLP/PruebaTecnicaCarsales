using Api.Interfaces;
using Api.Models; 
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharacterController : ControllerBase
    {
        private readonly ICharacterApi _characterApi;

        public CharacterController(ICharacterApi characterApi) {  
            _characterApi = characterApi;
        }

        [HttpGet]
        public async Task<List<Character>> getCharacters(string lst="")
        {
            List<Character> characters = new List<Character>();
            try
            {
                characters = await _characterApi.getCharacters(lst);
            }
            catch (Exception ex)
            {
                return new List<Character>();
            }

            return characters;
        }
    }
}
