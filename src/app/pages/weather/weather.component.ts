import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-store/app-state.model';
import { AddCityAction, AddFavoriteCityAction, DeleteCityAction } from 'src/app/app-store/app.actions';
import { City } from 'src/app/models/city.interface';
import { AuthService } from 'src/app/services/auth.service';
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
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.cities$ = this.store.select(store => store.cities);
  }

  addNewCity() {
    this.cityService.getCityDataByName(this.cityName).subscribe((city: City)=> {
      this.store.dispatch(new AddCityAction(city));
      this.cityName = "";
    })
  }

  deleteCity(id: number) {
    this.store.dispatch(new DeleteCityAction(id));
  }

  navigateNextFiveDays(cityName: string) {
    this.router.navigate(['weather/' + cityName]);
  }

  navigateFavourites() {
    this.router.navigate(['/weather/favorites']);
  }

  addFavorites(city: City) {
    this.store.dispatch(new AddFavoriteCityAction(city));
  }

  logout() {
    this.authService.logout();
  }
}
