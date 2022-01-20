import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/app-store/app-state.model';
import { DayTime } from 'src/app/models/day-time.interface';

@Component({
  selector: 'app-weather-time-temperatures',
  templateUrl: './weather-time-temperatures.component.html',
  styleUrls: ['./weather-time-temperatures.component.scss']
})
export class WeatherTimeTemperaturesComponent implements OnInit {

  dayWeek: string;
  cityName: string;
  timesPerDay$: Observable<DayTime[]>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.dayWeek = this.route.snapshot.paramMap.get('day');
    this.cityName = this.route.snapshot.paramMap.get('cityName');
    this.timesPerDay$ = this.store.select(store => store.dayTimeList[0]).pipe(
      map((dayTime:any) => dayTime.filter(dayEl => dayEl.day === this.dayWeek))
    );
  }

  back() {
    this.router.navigate(['weather/' + this.cityName]);
  }

}
