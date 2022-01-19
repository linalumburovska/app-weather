import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherFavouritesComponent } from './components/weather-favourites/weather-favourites.component';
import { WeatherComponent } from './weather.component';

const routes: Routes = [
    {
        path: '',
        component: WeatherComponent
    },
    {
      path: 'favorites',
      component: WeatherFavouritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }