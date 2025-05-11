using Api.Models;

namespace Api.Interfaces
{
    public interface IEpisodeApi
    {
        Task<EpisodeResponse> getEpisodeByPage(int page); 

        Task<Episode> getEpisodeInfo(int id); 
    }
}
