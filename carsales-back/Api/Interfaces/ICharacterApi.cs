using Api.Models;

namespace Api.Interfaces
{
    public interface ICharacterApi
    {
        Task<List<Character>> getCharacters(string lst); 
    }
}

