import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from '../models/city.interface';
import { map, take } from 'rxjs/operators';
import { Forecast } from '../models/forecast.interface';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  apiUrl: string = 'https://api.openweathermap.org/data/2.5/';
  apiKey: string = 'f05d5db558629ff2ea35f683c7ccc7e5';
  units: string = 'metric';

  constructor(private http: HttpClient, private router: Router) {}

  getCityDataByName(cityName: string): Observable<City> {
    return this.http.get<City>(this.apiUrl 
      + 'weather?q=' + cityName 
      + '&appid=' + this.apiKey 
      + '&units=' + this.units);
  }

  getWeatherDataForFiveDays(cityName: string): Observable<any> {
    return this.http.get<any>(this.apiUrl 
      + 'forecast?q=' + cityName 
      + '&appid=' + this.apiKey 
      + '&units=' + this.units).pipe(
        map(data => data.list)
      );
  }
  
}