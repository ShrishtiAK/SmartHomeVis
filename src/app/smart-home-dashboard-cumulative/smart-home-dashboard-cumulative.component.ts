import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HelpDialogComponentComponent } from '../help-dialog-component/help-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { HelpMedComponent } from '../help-dialog/help-med/help-med.component';
import { HelpActivityHourlyComponent } from '../help-dialog/help-activity-hourly/help-activity-hourly.component';
import { HelpActivityMonthlyComponent } from '../help-dialog/help-activity-monthly/help-activity-monthly.component';
import { HelpActivityDailyComponent } from '../help-dialog/help-activity-daily/help-activity-daily.component';
import { HelpMwUsageComponent } from '../help-dialog/help-mw-usage/help-mw-usage.component';
import { HelpWeightComponent } from '../help-dialog/help-weight/help-weight.component';

@Component({
  selector: 'app-smart-home-dashboard-cumulative',
  templateUrl: './smart-home-dashboard-cumulative.component.html',
  styleUrls: ['./smart-home-dashboard-cumulative.component.css']
})
export class SmartHomeDashboardCumulativeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Summary', cols: 2, rows: 1 },
        { title: 'Activity', cols: 1, rows: 2 },
        { title: 'Sleep', cols: 1, rows: 2 },
        { title: 'Weight', cols: 1, rows: 2 },
        { title: 'Medication', cols: 1, rows: 2 }
      ];
    })
  );

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver) { }

  openDialog(card): void {
    var dialogComponent;
    if (card == 'med')
      dialogComponent = HelpMedComponent
    else if (card == 'activity_hourly')
      dialogComponent = HelpActivityHourlyComponent
    else if (card == 'activity_monthly')
      dialogComponent = HelpActivityMonthlyComponent
    else if (card == 'activity_daily')
      dialogComponent = HelpActivityDailyComponent
    else if (card == 'mw_usage')
      dialogComponent = HelpMwUsageComponent
    else if (card == 'weight')
      dialogComponent = HelpWeightComponent

    const dialogRef = this.dialog.open(dialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
