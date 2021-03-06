import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from '../models/city.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  apiUrl: string = 'https://api.openweathermap.org/data/2.5/';
  apiKey: string = '122fc85a21196cdda820b3ff4f116638';
  units: string = 'metric';

  constructor(private http: HttpClient, private router: Router) {}

  getCityDataByName(cityName: string): Observable<City> {
    return this.http.get<City>(this.apiUrl 
      + 'weather?q=' + cityName 
      + '&appid=' + this.apiKey 
      + '&units=' + this.units);
  }

  // RETURNS DATA FOR FIVE DAYS AND FOR EVERY DAY GIVES FORECAST ON EVERY THREE HOURS
  getWeatherDataForFiveDaysThreeHours(cityName: string): Observable<any> {
    return this.http.get<any>(this.apiUrl 
      + 'forecast?q=' + cityName 
      + '&appid=' + this.apiKey 
      + '&units=' + this.units).pipe(
        map(data => data.list)
      );
  }
  
}