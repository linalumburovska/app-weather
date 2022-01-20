import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models/forecast.interface';

@Component({
  selector: 'app-time-temperature',
  templateUrl: './time-temperature.component.html',
  styleUrls: ['./time-temperature.component.scss']
})
export class TimeTemperatureComponent implements OnInit {

  @Input() time: Forecast;

  constructor() { }

  ngOnInit(): void {
  }

}
