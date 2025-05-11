import { Info } from "./info.model"

export interface Origin{
  name:string,
  url:string
}
export interface Location{
  name:string,
  url:string
}

export interface SingleLocation{
  id:number,
  name:string,
  type:string,
  dimension:string,
  residents:string[]
}

export interface LocationResponse{
  info:Info,
  results:SingleLocation[]
}
