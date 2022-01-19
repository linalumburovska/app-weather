import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from 'src/app/models/city.interface';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  @Input() city: City;
  @Input() isFavoritePage: boolean;
  @Output() deleteCity = new EventEmitter<number>(null);
  @Output() nextFiveDays = new EventEmitter<string>(null);
  @Output() addFavorites = new EventEmitter<City>(null);

  constructor() { }

  ngOnInit(): void {
  }

  removeCity(cityId: number) {
    this.deleteCity.emit(cityId);
  }

  weatherNextFiveDays(cityName: string) {
    this.nextFiveDays.emit(cityName);
  }

  addToFavourites(city: City) {
    this.addFavorites.emit(city);
  }

}
