import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTemperatureComponent } from './time-temperature.component';

describe('TimeTemperatureComponent', () => {
  let component: TimeTemperatureComponent;
  let fixture: ComponentFixture<TimeTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTemperatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
