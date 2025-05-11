using Api.Interfaces;
using Api.Models;
using System.Text.Json;

namespace Api.Services
{
    public class EpisodeService:IEpisodeApi
    {
        private readonly HttpClient _httpClient;  

        public EpisodeService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<EpisodeResponse> getEpisodeByPage(int page = 1) {
            EpisodeResponse episodes = new EpisodeResponse();
            try {
                string urlEpisodeByPage = "https://rickandmortyapi.com/api/episode?page="; 
                HttpResponseMessage http_get = await _httpClient.GetAsync(urlEpisodeByPage + page.ToString());

                string resp = await http_get.Content.ReadAsStringAsync();
                episodes = JsonSerializer.Deserialize<EpisodeResponse>(resp); 

            }
            catch (Exception ex) {
                episodes = new EpisodeResponse();
            }

            return episodes;
        }

        public async Task<Episode> getEpisodeInfo(int id)
        {
            Episode episode = new Episode();
            try
            {
                string urlEpisode = "https://rickandmortyapi.com/api/episode/";
                HttpResponseMessage http_get = await _httpClient.GetAsync(urlEpisode + id.ToString());

                string resp = await http_get.Content.ReadAsStringAsync();
                episode = JsonSerializer.Deserialize<Episode>(resp);

            }
            catch (Exception ex)
            {
                episode = new Episode();
            }

            return episode;
        }

    }
}
