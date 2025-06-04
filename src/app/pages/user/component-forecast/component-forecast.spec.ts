import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentForecast } from './component-forecast';

describe('ComponentForecast', () => {
  let component: ComponentForecast;
  let fixture: ComponentFixture<ComponentForecast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentForecast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentForecast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
