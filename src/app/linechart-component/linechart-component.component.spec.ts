import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartComponentComponent } from './linechart-component.component';

describe('LinechartComponentComponent', () => {
  let component: LinechartComponentComponent;
  let fixture: ComponentFixture<LinechartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinechartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinechartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
