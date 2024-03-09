import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppDialogComponent } from 'src/app/app-dialog/app-dialog.component';
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDialog(data: any) {
    return this.dialog.open(AppDialogComponent, {
      width: '400px',
      data: data,
    });
  }
}
