import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-store/app-state.model';
import { City } from 'src/app/models/city.interface';

@Component({
  selector: 'app-weather-favourites',
  templateUrl: './weather-favourites.component.html',
  styleUrls: ['./weather-favourites.component.scss']
})
export class WeatherFavouritesComponent implements OnInit {

  favorites$: Observable<City[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.favorites$ = this.store.select(store => store.favourites);
  }

}
