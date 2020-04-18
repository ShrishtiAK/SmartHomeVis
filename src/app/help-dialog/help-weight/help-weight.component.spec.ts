import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpWeightComponent } from './help-weight.component';

describe('HelpWeightComponent', () => {
  let component: HelpWeightComponent;
  let fixture: ComponentFixture<HelpWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
