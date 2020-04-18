import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightSummaryComponent } from './weight-summary.component';

describe('WeightSummaryComponent', () => {
  let component: WeightSummaryComponent;
  let fixture: ComponentFixture<WeightSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
