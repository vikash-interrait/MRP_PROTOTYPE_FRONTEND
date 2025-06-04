import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuForecast } from './sku-forecast';

describe('SkuForecast', () => {
  let component: SkuForecast;
  let fixture: ComponentFixture<SkuForecast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkuForecast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkuForecast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
