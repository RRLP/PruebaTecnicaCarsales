import { Component } from '@angular/core';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
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
