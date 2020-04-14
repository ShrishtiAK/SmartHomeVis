import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpActivityHourlyComponent } from './help-activity-hourly.component';

describe('HelpActivityHourlyComponent', () => {
  let component: HelpActivityHourlyComponent;
  let fixture: ComponentFixture<HelpActivityHourlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpActivityHourlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpActivityHourlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
