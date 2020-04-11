import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MWUsageComponent } from './app-mw-usage.component';

describe('AppAreaChartComponent', () => {
  let component: MWUsageComponent;
  let fixture: ComponentFixture<MWUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MWUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MWUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
