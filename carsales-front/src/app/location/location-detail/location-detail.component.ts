import { Component } from '@angular/core';
import { Character } from 'src/app/core/models/character.model';
import { SingleLocation } from 'src/app/core/models/location.model';
import { CarsalesService } from 'src/app/core/services/carsales.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent {
  public idLocation:number=0;
  public Location!: SingleLocation;
  public Characters:Character[]=[];
  public IdsCharacters:string="";
  public urlCharacters:string[]=[];
  constructor(private service:CarsalesService, private shared:SharedService){}

  ngOnInit():void{
    this.shared.currentIdLocation.subscribe(id=>
      {
        if(id!=0){
          this.idLocation = id;
          this.service.getLocationInfo(id).subscribe((Location:SingleLocation)=>{
            console.log(Location, this.IdsCharacters);
            this.Location=Location;
            // this.IdsCharacters = Location.residents.map(a=>a.split('character/')[1]).join(',');

            // this.service.getCharacters(this.IdsCharacters).subscribe((Characters:Character[])=>{
            //     this.Characters=Characters;
            //     console.log(this.Characters);
            // })
          })
        }
      });

  }
}
