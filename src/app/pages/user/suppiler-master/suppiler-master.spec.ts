import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppilerMaster } from './suppiler-master';

describe('SuppilerMaster', () => {
  let component: SuppilerMaster;
  let fixture: ComponentFixture<SuppilerMaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuppilerMaster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppilerMaster);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
