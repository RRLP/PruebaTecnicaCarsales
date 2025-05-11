import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private idEpisode = new BehaviorSubject(0);
  currentId=this.idEpisode.asObservable();

  private idLocation = new BehaviorSubject(0);
  currentIdLocation=this.idLocation.asObservable();

  private showEpisodeList = new BehaviorSubject(0);
  currentShowEpisode=this.showEpisodeList.asObservable();

  constructor() { }

  setIdEpisode(id:number){
    this.idEpisode.next(id);
  }

  setIdLocation(id:number){
    this.idLocation.next(id);
  }

  setShowEpisodeList(show:boolean){
    this.showEpisodeList.next((show)?1:0);
  }
}
