import { Component } from '@angular/core';
import { Character } from 'src/app/core/models/character.model';
import { Episode} from 'src/app/core/models/episode.model';
import { CarsalesService } from 'src/app/core/services/carsales.service';
import { SharedService } from 'src/app/core/services/shared.service';
@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent {
  public idEpisode:number=0;
  public showDetail:boolean = false;
  public Episode!: Episode;
  public Characters:Character[]=[];
  public IdsCharacters:string="";
  public urlCharacters:string[]=[];
  constructor(private service:CarsalesService, private shared:SharedService){}

  ngOnInit():void{
    this.shared.currentId.subscribe(id=>
      {
        if(id!=0){
          this.idEpisode = id;
          this.service.getEpisodeInfo(id).subscribe((Episode:Episode)=>{
            this.Episode=Episode;
            this.IdsCharacters = Episode.characters.map(a=>a.split('character/')[1]).join(',');
            console.log(Episode);
            this.service.getCharacters(this.IdsCharacters).subscribe((Characters:Character[])=>{
                this.Characters=Characters;
                console.log(this.Characters);
            })
            this.showDetail = true;
          })
        }else{
          this.showDetail=false;
          this.Characters=[];
        }
      });

  }
}
