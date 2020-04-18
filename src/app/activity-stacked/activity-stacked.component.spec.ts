import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStackedComponent } from './activity-stacked.component';

describe('ActivityStackedComponent', () => {
  let component: ActivityStackedComponent;
  let fixture: ComponentFixture<ActivityStackedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityStackedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
