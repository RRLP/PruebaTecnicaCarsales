import { Component, Input } from '@angular/core';
import { Character } from '../../core/models/character.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class CharacterComponent {
  @Input() Characters!:Character[];
}
