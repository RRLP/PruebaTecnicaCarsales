import { Injectable } from '@angular/core';
import { Episode, EpisodeResponse } from '../models/episode.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { LocationResponse, SingleLocation } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class CarsalesService {

  // private urlAllEpisodes = 'https://rickandmortyapi.com/api/episode/';
  // private urlEpisodeByPage = 'https://rickandmortyapi.com/api/episode?page=';
  // private urlEpisode:string = 'https://rickandmortyapi.com/api/episode/';
  // private urlCharacters:string = 'https://rickandmortyapi.com/api/character/';

  // private urlLocationByPage:string = 'https://rickandmortyapi.com/api/location?page=';
  // private urlLocationInfo:string = 'https://rickandmortyapi.com/api/location/';

  private urlAllEpisodes = 'http://localhost:4201/api/Episode/EpisodeDetail';
  private urlEpisodeByPage = 'http://localhost:4201/api/Episode?page=';
  private urlEpisode:string = 'http://localhost:4201/api/Episode/EpisodeDetail?id=';
  private urlCharacters:string = 'http://localhost:4201/api/Character?lst=';

  private urlLocationByPage:string = 'https://rickandmortyapi.com/api/location?page=';
  private urlLocationInfo:string = 'https://rickandmortyapi.com/api/location/';

  constructor(private http:HttpClient) { }

  public getEpisodes():Observable<EpisodeResponse>{
    return this.http.get<EpisodeResponse>(this.urlAllEpisodes);
  }
  public getEpisodeByPage(page:number):Observable<EpisodeResponse>{
    console.log(this.urlEpisodeByPage);
    return this.http.get<EpisodeResponse>(this.urlEpisodeByPage+page)
  }

  public getEpisodeInfo(id:number):Observable<Episode>{
    console.log(this.urlEpisode+id);
    return this.http.get<Episode>(this.urlEpisode+id);
  }

  public getCharacters(listId:string):Observable<Character[]>{
    return this.http.get<Character[]>(this.urlCharacters+listId);
  }

  public getLocationByPage(page:number):Observable<LocationResponse>{
    return this.http.get<LocationResponse>(this.urlLocationByPage+page);
  }

  public getLocationInfo(id:number):Observable<SingleLocation>{
    return this.http.get<SingleLocation>(this.urlLocationInfo+id);
  }
}
