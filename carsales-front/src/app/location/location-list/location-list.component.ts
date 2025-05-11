import { Component } from '@angular/core';
import { SharedService } from '../../core/services/shared.service';
import { CarsalesService } from '../../core/services/carsales.service';
import { LocationResponse, SingleLocation } from '../../core/models/location.model';
import { Info } from '../../core/models/info.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class LocationListComponent {
  public Info:Info={prev:'',next:''};
  public Locations!:SingleLocation[];
  public idLocation:number=0;
  public prevPage:number=1;
  public nextPage:number=2;

  constructor(private service:CarsalesService, private shared:SharedService){}


  ngOnInit():void{
    this.shared.currentIdLocation.subscribe(id=>this.idLocation=id);

    // this.service.getEpisodes().subscribe((r:EpisodeResponse)=>{
    //   this.Episodes = r.results;
    //   console.log(r);
    // })
    this.getIdLocationByPage(1);

  }
  getIdLocation(id:number):void{
    this.shared.setIdLocation(id);
  }

  getIdLocationByPage(page:number):void{
    this.service.getLocationByPage(page).subscribe((r:LocationResponse)=>{
      this.Info = r.info;
      this.prevPage = this.PageId(r.info.prev??'');
      this.nextPage = this.PageId(r.info.next??'');
      this.Locations = r.results;
      console.log(r);
    })
  }
  PageId(url:string):number{
    return parseInt(url.split('page=')[1]);
  }
}
