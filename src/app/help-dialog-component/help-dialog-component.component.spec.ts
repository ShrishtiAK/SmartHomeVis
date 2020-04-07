import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDialogComponentComponent } from './help-dialog-component.component';

describe('HelpDialogComponentComponent', () => {
  let component: HelpDialogComponentComponent;
  let fixture: ComponentFixture<HelpDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
