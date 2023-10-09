import { Component } from '@angular/core';
import { Episode, EpisodeResponse } from 'src/app/core/models/episode.model';
import { Info } from 'src/app/core/models/info.model';
import { CarsalesService } from 'src/app/core/services/carsales.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
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
