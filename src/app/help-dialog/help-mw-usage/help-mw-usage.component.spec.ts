import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpMwUsageComponent } from './help-mw-usage.component';

describe('HelpMwUsageComponent', () => {
  let component: HelpMwUsageComponent;
  let fixture: ComponentFixture<HelpMwUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpMwUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpMwUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
