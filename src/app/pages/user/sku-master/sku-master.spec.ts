import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuMaster } from './sku-master';

describe('SkuMaster', () => {
  let component: SkuMaster;
  let fixture: ComponentFixture<SkuMaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkuMaster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkuMaster);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
