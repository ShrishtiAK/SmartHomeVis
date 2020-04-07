import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-help-dialog-component',
  templateUrl: './help-dialog-component.component.html',
  styleUrls: ['./help-dialog-component.component.css']
})
export class HelpDialogComponentComponent {

  constructor(
    public dialogRef: MatDialogRef<HelpDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
