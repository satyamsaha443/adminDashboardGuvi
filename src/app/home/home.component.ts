import { Component } from '@angular/core';
import data from '../../assets/json/data.json'
import { Card } from '../card/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards: Card[] = data
}
