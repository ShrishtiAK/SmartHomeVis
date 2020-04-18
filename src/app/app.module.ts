import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SmartHomeDashboardComponent } from './smart-home-dashboard/smart-home-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { TabComponentComponent } from './tab-component/tab-component.component';
import { SmartHomeDashboardCumulativeComponent } from './smart-home-dashboard-cumulative/smart-home-dashboard-cumulative.component';
import { HelpDialogComponentComponent } from './help-dialog-component/help-dialog-component.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { ChartModule } from 'angular-highcharts';
import { HighchartsService } from './highcharts.service';
import { LinechartComponentComponent } from './linechart-component/linechart-component.component';
import { MWUsageComponent } from './app-mw-usage/app-mw-usage.component';
import { MonthlyActivityComponent } from './monthly-activity/monthly-activity.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MedCalendarComponent } from './med-calendar/med-calendar.component';
import { HelpMedComponent } from './help-dialog/help-med/help-med.component';
import { HelpActivityDailyComponent } from './help-dialog/help-activity-daily/help-activity-daily.component';
import { HelpMwUsageComponent } from './help-dialog/help-mw-usage/help-mw-usage.component';
import { HelpActivityHourlyComponent } from './help-dialog/help-activity-hourly/help-activity-hourly.component';
import { HelpActivityMonthlyComponent } from './help-dialog/help-activity-monthly/help-activity-monthly.component';
import { MatTableModule } from '@angular/material/table';
import { ActivityStackedComponent } from './activity-stacked/activity-stacked.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { MwScatterComponent } from './mw-scatter/mw-scatter.component';
import { ActivityBarComponent } from './activity-bar/activity-bar.component';
import { SummaryDailyComponent } from './summary-daily/summary-daily.component';
import { WeightMonthlyComponent } from './weight-monthly/weight-monthly.component';
import { WeightSummaryComponent } from './weight-summary/weight-summary.component';
import { FusionChartsModule } from 'angular-fusioncharts';
// Load FusionCharts
import * as FusionCharts from 'fusioncharts';

// Load Widgets
import * as Widgets from 'fusioncharts/fusioncharts.widgets';

// Load FusionTheme Theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { HelpWeightComponent } from './help-dialog/help-weight/help-weight.component'
// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    SmartHomeDashboardComponent,
    TabComponentComponent,
    SmartHomeDashboardCumulativeComponent,
    HelpDialogComponentComponent,
    LinechartComponentComponent,
    MWUsageComponent,
    MonthlyActivityComponent,
    MedCalendarComponent,
    HelpMedComponent,
    HelpActivityDailyComponent,
    HelpMwUsageComponent,
    HelpActivityHourlyComponent,
    HelpActivityMonthlyComponent,
    ActivityStackedComponent,
    MwScatterComponent,
    ActivityBarComponent,
    SummaryDailyComponent,
    WeightMonthlyComponent,
    WeightSummaryComponent,
    HelpWeightComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatDialogModule,
    ChartModule,
    MatCheckboxModule,
    FormsModule,
    MatTableModule,
    NgApexchartsModule,
    FusionChartsModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' }
    },
    HighchartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
