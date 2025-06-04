import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mrp } from './mrp';

describe('Mrp', () => {
  let component: Mrp;
  let fixture: ComponentFixture<Mrp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mrp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mrp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
