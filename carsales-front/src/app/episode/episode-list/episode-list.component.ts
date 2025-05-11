import { Component } from '@angular/core';
import { SharedService } from '../../core/services/shared.service';
import { CarsalesService } from '../../core/services/carsales.service';
import { Episode, EpisodeResponse } from '../../core/models/episode.model';
import { Info } from '../../core/models/info.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class EpisodeListComponent {
  public Info:Info={prev:'',next:''};
  public Episodes:Episode[] = [];
  public idEpisode:number=0;
  public prevPage:number=1;
  public nextPage:number=2;

  constructor(private service:CarsalesService, private shared:SharedService){}


  ngOnInit():void{
    this.shared.currentId.subscribe(id=>this.idEpisode=id);

    // this.service.getEpisodes().subscribe((r:EpisodeResponse)=>{
    //   this.Episodes = r.results;
    //   console.log(r);
    // })
    this.getEpisodeListByPage(1);

  }
  getIdEpisodeid(id:number):void{
    this.shared.setIdEpisode(id);
  }

  getEpisodeListByPage(page:number):void{
    this.service.getEpisodeByPage(page).subscribe((r:EpisodeResponse)=>{
      this.Info = r.info;
      this.prevPage = this.PageId(r.info.prev??'');
      this.nextPage = this.PageId(r.info.next??'');
      this.Episodes = r.results;
      console.log(r);
    })
  }
  PageId(url:string):number{
    this.cleanData();
    return parseInt(url.split('page=')[1]);
  }

  cleanData():void{
    this.idEpisode = 0;
    this.shared.setIdEpisode(this.idEpisode);
  }
}
