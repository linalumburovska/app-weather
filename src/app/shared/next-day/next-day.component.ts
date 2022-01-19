import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models/forecast.interface';

@Component({
  selector: 'app-next-day',
  templateUrl: './next-day.component.html',
  styleUrls: ['./next-day.component.scss']
})
export class NextDayComponent implements OnInit {
  
  @Input() forecast: Forecast;

  constructor() { }

  ngOnInit(): void {
  }

}
