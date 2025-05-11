import { Component } from '@angular/core';
import { SharedService } from '../../core/services/shared.service';
import { EpisodeListComponent } from '../../episode/episode-list/episode-list.component';
import { LocationListComponent } from '../../location/location-list/location-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone:true,
  imports:[EpisodeListComponent, LocationListComponent, CommonModule]
})
export class SidebarComponent {
  public showEpisodeList:boolean=true;


  constructor(private shared:SharedService){}

  get ChangeText(){
    return (this.showEpisodeList)?'Show Locations':'Show Episodes';
  }

  setShowEpisode():void{
    this.showEpisodeList=!this.showEpisodeList;
    this.shared.setShowEpisodeList(this.showEpisodeList);
  }
}
