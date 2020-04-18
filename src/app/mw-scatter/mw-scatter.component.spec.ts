import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwScatterComponent } from './mw-scatter.component';

describe('MwScatterComponent', () => {
  let component: MwScatterComponent;
  let fixture: ComponentFixture<MwScatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwScatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
