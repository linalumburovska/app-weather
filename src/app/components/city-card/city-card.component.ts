import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city.interface';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  @Input() city: City;

  constructor() { }

  ngOnInit(): void {
  }

}
