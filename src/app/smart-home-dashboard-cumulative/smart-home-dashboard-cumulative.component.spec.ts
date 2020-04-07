import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { SmartHomeDashboardCumulativeComponent } from './smart-home-dashboard-cumulative.component';

describe('SmartHomeDashboardCumulativeComponent', () => {
  let component: SmartHomeDashboardCumulativeComponent;
  let fixture: ComponentFixture<SmartHomeDashboardCumulativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmartHomeDashboardCumulativeComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartHomeDashboardCumulativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
