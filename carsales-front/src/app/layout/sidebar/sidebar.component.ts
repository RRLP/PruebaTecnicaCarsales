import { Component } from '@angular/core';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
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
