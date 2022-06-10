import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _snackBar: MatSnackBar) {}
  title: String = 'mdnj2b';
  hasToggledTheme: boolean = false;

  openSnackBar(): void {
    this._snackBar.open('こんにちは', '', { duration: 3000 });
  }
  toggledTheme(): void {
    this.hasToggledTheme = !this.hasToggledTheme;
  }
}
