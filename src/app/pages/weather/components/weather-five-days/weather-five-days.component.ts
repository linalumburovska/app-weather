import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Forecast } from 'src/app/models/forecast.interface';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-weather-five-days',
  templateUrl: './weather-five-days.component.html',
  styleUrls: ['./weather-five-days.component.scss']
})
export class WeatherFiveDaysComponent implements OnInit {

  cityName: string;
  forecastNextFiveDays$: Observable<Forecast[]>;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cityName = this.route.snapshot.paramMap.get('cityName');
    this.forecastNextFiveDays$ = this.cityService.getWeatherDataForFiveDays(this.cityName);
  }

  navigateToTime(forecast: Forecast) {
    const day = new Date(forecast.dt);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const dayOfWeek = days[day.getDay()]
    this.router.navigate(['weather/' + this.cityName + '/' + dayOfWeek]);
  }

}
