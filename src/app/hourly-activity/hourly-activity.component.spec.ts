import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyActivityComponent } from './hourly-activity.component';

describe('HourlyActivityComponent', () => {
  let component: HourlyActivityComponent;
  let fixture: ComponentFixture<HourlyActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
