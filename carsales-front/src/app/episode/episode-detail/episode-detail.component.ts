import { Component } from '@angular/core';
import { Episode } from '../../core/models/episode.model';
import { Character } from '../../core/models/character.model';
import { CarsalesService } from '../../core/services/carsales.service';
import { SharedService } from '../../core/services/shared.service';
import { CharacterComponent } from '../../character/character/character.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css'],
  standalone:true,
  imports:[CharacterComponent, CommonModule]
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
