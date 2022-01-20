import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-store/app-state.model';
import { AddDayTimeListAction } from 'src/app/app-store/app.actions';
import { DayTime } from 'src/app/models/day-time.interface';
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
  dayTimeList: DayTime[];
  days: DayTime[];

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.dayTimeList = [];
    this.days = [];
  }

  ngOnInit(): void {
    this.cityName = this.route.snapshot.paramMap.get('cityName');
    this.forecastNextFiveDays$ = this.cityService.getWeatherDataForFiveDaysThreeHours(this.cityName);
    this.rearrangeData();
  }

  navigateToTime(dayOfWeek: string) {
    this.router.navigate(['weather/' + this.cityName + '/' + dayOfWeek]);
  }

  rearrangeData() {
    this.forecastNextFiveDays$.subscribe((foreCastList: Forecast[]) => {
      foreCastList.forEach((forecast: Forecast) => {
        const day = new Date(forecast.dt*1000);
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const dayTime: DayTime = {
          day: days[day.getDay()],
          time:  day.getTime(),
          forecast: forecast
        }
        this.dayTimeList.push(dayTime);
      });
      
      // Push this list in the store so forecast by day-time can be done
      this.store.dispatch(new AddDayTimeListAction(this.dayTimeList));

      // Since I have the data for 5 days and every three hours
      // In dayTime I store an array with object time and forecast
      // In days I store only the days with the forecast of the first time slot
      // The other for daily and hourly did not work for free subscription on the page
      // The first element is today so it is removed from the list
      this.dayTimeList.forEach((dayTime: DayTime) => {
        const findDay = this.days.find(el => el.day === dayTime.day);
        if(findDay === undefined) {
          this.days.push(dayTime);
        }
      });
      this.days.shift();
    });
  }


}
