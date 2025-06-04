import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procurement } from './procurement';

describe('Procurement', () => {
  let component: Procurement;
  let fixture: ComponentFixture<Procurement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Procurement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procurement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
