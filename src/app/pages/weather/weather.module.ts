import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { CityService } from 'src/app/services/city.service';
import { WeatherComponent } from './weather.component';
import { CityCardComponent } from 'src/app/shared/city-card/city-card.component';
import { FormsModule } from '@angular/forms';
import { WeatherFavouritesComponent } from './components/weather-favourites/weather-favourites.component';
import { WeatherFiveDaysComponent } from './components/weather-five-days/weather-five-days.component';
import { NextDayComponent } from 'src/app/shared/next-day/next-day.component';
import { TimeTemperatureComponent } from 'src/app/shared/time-temperature/time-temperature.component';
import { WeatherTimeTemperaturesComponent } from './components/weather-time-temperatures/weather-time-temperatures.component';



@NgModule({
  declarations: [
    WeatherComponent,
    CityCardComponent,
    WeatherFavouritesComponent,
    WeatherFiveDaysComponent,
    NextDayComponent,
    TimeTemperatureComponent,
    WeatherTimeTemperaturesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WeatherRoutingModule
  ],
  providers: [CityService]
})
export class WeatherModule { }
