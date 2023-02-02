import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'morgCal';
  yearControl = new FormControl('option25' as ThemePalette);
  termControl = new FormControl('option5' as ThemePalette);
  paymentControl = new FormControl('option6' as ThemePalette);
  frequencyControl = new FormControl('option1' as ThemePalette);

  constructor(private dailogRef: MatDialog) {}
  onSubmit() {
    this.dailogRef.open(PopupComponent, { height: '80%', width: '90%' });
  }
}
