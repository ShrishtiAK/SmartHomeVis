import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpActivityMonthlyComponent } from './help-activity-monthly.component';

describe('HelpActivityMonthlyComponent', () => {
  let component: HelpActivityMonthlyComponent;
  let fixture: ComponentFixture<HelpActivityMonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpActivityMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpActivityMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
