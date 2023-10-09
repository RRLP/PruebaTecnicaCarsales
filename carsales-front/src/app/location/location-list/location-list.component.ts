import { Component } from '@angular/core';
import { Info } from 'src/app/core/models/info.model';
import { LocationResponse, SingleLocation } from 'src/app/core/models/location.model';
import { CarsalesService } from 'src/app/core/services/carsales.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
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
