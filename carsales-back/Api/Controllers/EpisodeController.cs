using Api.Interfaces;
using Api.Models; 
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class EpisodeController : ControllerBase
    {
        private readonly IEpisodeApi _episodeApi;
        public EpisodeController(IEpisodeApi episodeApi) { 
            _episodeApi = episodeApi;
        }


        [HttpGet]
        
        public async Task<EpisodeResponse> getEpisodeByPage(int page = 1)
        {
            EpisodeResponse episodes = new EpisodeResponse();
            try
            {
                episodes = await _episodeApi.getEpisodeByPage(page);
            }
            catch (Exception ex)
            {
                return new EpisodeResponse();
            }

            return episodes;
        }

        [HttpGet]
        [Route("EpisodeDetail")]
        public async Task<Episode> getEpisodeInfo(int id)
        {
            Episode episode = new Episode();
            try
            {
                episode = await _episodeApi.getEpisodeInfo(id);
            }
            catch (Exception ex)
            {
                return new Episode();
            }

            return episode;
        }
    }
}
