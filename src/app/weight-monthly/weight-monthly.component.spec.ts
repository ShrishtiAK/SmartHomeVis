import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightMonthlyComponent } from './weight-monthly.component';

describe('WeightMonthlyComponent', () => {
  let component: WeightMonthlyComponent;
  let fixture: ComponentFixture<WeightMonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
