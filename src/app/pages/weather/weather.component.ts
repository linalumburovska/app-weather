import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getCityDataByName('Madrid').subscribe(val=> console.log(val))
  }

}
