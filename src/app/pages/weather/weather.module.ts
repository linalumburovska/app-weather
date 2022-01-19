import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { CityService } from 'src/app/services/city.service';
import { WeatherComponent } from './weather.component';
import { CityCardComponent } from 'src/app/shared/city-card/city-card.component';
import { FormsModule } from '@angular/forms';
import { WeatherFavouritesComponent } from './components/weather-favourites/weather-favourites.component';



@NgModule({
  declarations: [
    WeatherComponent,
    CityCardComponent,
    WeatherFavouritesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WeatherRoutingModule
  ],
  providers: [CityService]
})
export class WeatherModule { }
