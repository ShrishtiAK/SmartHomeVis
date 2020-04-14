import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpMedComponent } from './help-med.component';

describe('HelpMedComponent', () => {
  let component: HelpMedComponent;
  let fixture: ComponentFixture<HelpMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
