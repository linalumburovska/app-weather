import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherFavouritesComponent } from './components/weather-favourites/weather-favourites.component';
import { WeatherFiveDaysComponent } from './components/weather-five-days/weather-five-days.component';
import { WeatherTimeTemperaturesComponent } from './components/weather-time-temperatures/weather-time-temperatures.component';
import { WeatherComponent } from './weather.component';

const routes: Routes = [
    {
        path: '',
        component: WeatherComponent
    },
    {
      path: 'favorites',
      component: WeatherFavouritesComponent
    },
    {
      path: ':cityName',
      component: WeatherFiveDaysComponent
    },
    {
      path: ':cityName/:day',
      component: WeatherTimeTemperaturesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }