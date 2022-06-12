import { Component, HostBinding, isDevMode, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';

export class Global {
  isDarkMode = false;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  Global: Global;
  constructor(
    private _snackBar: MatSnackBar,
    private overlay: OverlayContainer
  ) {
    this.Global = new Global();
  }

  @HostBinding('class') className = '';

  title: String = 'mdnj2b';
  theme = new FormControl();

  openSnackBar(): void {
    this._snackBar.open('こんにちは', '', { duration: 3000 });
  }

  setThemeMode(value: boolean): void {
    this.Global.isDarkMode = value;
    if (value) {
      this.overlay.getContainerElement().classList.add('darkMode');
    } else {
      this.overlay.getContainerElement().classList.remove();
    }
  }

  isSystemDarkMode = (): boolean =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  ngOnInit(): void {
    // initial
    this.theme.setValue('system');
    this.Global.isDarkMode = this.isSystemDarkMode();

    this.theme.valueChanges.subscribe((mode) => {
      let value = false;
      switch (mode) {
        case 'system':
          value = this.isSystemDarkMode();
          break;
        case 'light':
          value = false;
          break;
        case 'dark':
          value = true;
          break;
      }
      this.setThemeMode(value);
    });
  }
}
