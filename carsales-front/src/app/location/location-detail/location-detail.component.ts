import { Component } from '@angular/core';
import { SingleLocation } from '../../core/models/location.model';
import { Character } from '../../core/models/character.model';
import { CarsalesService } from '../../core/services/carsales.service';
import { SharedService } from '../../core/services/shared.service';
import { CharacterComponent } from '../../character/character/character.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
  standalone:true,
  imports:[CharacterComponent, CommonModule]
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
