import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedWeeklyComponent } from './med-weekly.component';

describe('MedWeeklyComponent', () => {
  let component: MedWeeklyComponent;
  let fixture: ComponentFixture<MedWeeklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedWeeklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
