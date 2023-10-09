import { Info } from "./info.model"

export interface Episode{
  id:number,
  name:string,
  air_date:string,
  episode:string,
  characters: Array<string>,
  url: string,
  created:string
}


export interface EpisodeResponse{
  info:Info,
  results:Episode[]
}
