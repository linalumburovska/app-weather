import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { CityService } from 'src/app/services/city.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  providers: [CityService]
})
export class WeatherModule { }
