import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmForecast } from './rm-forecast';

describe('RmForecast', () => {
  let component: RmForecast;
  let fixture: ComponentFixture<RmForecast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmForecast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmForecast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
