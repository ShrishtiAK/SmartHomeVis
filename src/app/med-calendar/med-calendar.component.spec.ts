import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedCalendarComponent } from './med-calendar.component';

describe('MedCalendarComponent', () => {
  let component: MedCalendarComponent;
  let fixture: ComponentFixture<MedCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
