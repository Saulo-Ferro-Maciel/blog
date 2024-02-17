import { Component } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  
  photoCover:string = ""
  cardTitle:string = ""
  cardTopic:string = ""
  cardDate:string = ""
}
