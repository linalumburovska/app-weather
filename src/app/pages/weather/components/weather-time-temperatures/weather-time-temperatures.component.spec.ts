import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTimeTemperaturesComponent } from './weather-time-temperatures.component';

describe('WeatherTimeTemperaturesComponent', () => {
  let component: WeatherTimeTemperaturesComponent;
  let fixture: ComponentFixture<WeatherTimeTemperaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherTimeTemperaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTimeTemperaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
