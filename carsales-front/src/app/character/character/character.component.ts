import { Component, Input } from '@angular/core';
import { Character } from 'src/app/core/models/character.model';
import { Origin } from 'src/app/core/models/location.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  @Input() Characters!:Character[];
}
