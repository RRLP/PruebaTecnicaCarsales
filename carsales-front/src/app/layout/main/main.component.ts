import { Component } from '@angular/core';
import { SharedService } from '../../core/services/shared.service';
import { CommonModule } from '@angular/common';
import { EpisodeDetailComponent } from '../../episode/episode-detail/episode-detail.component';
import { LocationDetailComponent } from '../../location/location-detail/location-detail.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone:true,
  imports: [CommonModule, EpisodeDetailComponent, LocationDetailComponent]
})
export class MainComponent {
  public showEpisodeList:boolean=true;

  constructor(private shared:SharedService){}



  ngOnInit():void{
    this.shared.currentShowEpisode.subscribe(boo=>
      {
        // console.log(boo);
        // if(boo==1){
        //   this.showEpisodeList = true;
        // }else{
        //   this.showEpisodeList = false;
        // }
      });

  }
}
