import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { CityService } from 'src/app/services/city.service';
import { WeatherComponent } from './weather.component';



@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  providers: [CityService]
})
export class WeatherModule { }
