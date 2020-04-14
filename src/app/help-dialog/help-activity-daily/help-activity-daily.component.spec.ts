import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpActivityDailyComponent } from './help-activity-daily.component';

describe('HelpActivityDailyComponent', () => {
  let component: HelpActivityDailyComponent;
  let fixture: ComponentFixture<HelpActivityDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpActivityDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpActivityDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
