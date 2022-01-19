import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-store/app-state.model';
import { AddCityAction } from 'src/app/app-store/app.actions';
import { City } from 'src/app/models/city.interface';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  
  cities$: Observable<City[]>;
  cityName: string;

  constructor(
    private cityService: CityService,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.cities$ = this.store.select(store => store.cities);
  }

  addNewCity() {
    this.cityService.getCityDataByName(this.cityName).subscribe((city: City)=> {
      this.store.dispatch(new AddCityAction(city))
    })
  }

}
