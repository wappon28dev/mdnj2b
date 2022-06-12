import { Component, HostBinding, isDevMode, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';

export class AppConst {
  isDarkMode = false;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  AppConst: AppConst;
  constructor(
    private _snackBar: MatSnackBar,
    private overlay: OverlayContainer
  ) {
    this.AppConst = new AppConst();
  }

  @HostBinding('class') className = '';

  title: String = 'mdnj2b';
  theme = new FormControl();

  openSnackBar(): void {
    this._snackBar.open('こんにちは', '', { duration: 3000 });
  }

  setThemeMode(value: boolean): void {
    this.AppConst.isDarkMode = value;
    if (value) {
      this.overlay.getContainerElement().classList.add('darkMode');
    } else {
      this.overlay.getContainerElement().classList.remove();
    }
  }

  ngOnInit(): void {
    this.theme.setValue('dark');
    this.AppConst.isDarkMode = true;
    this.theme.valueChanges.subscribe((mode) => {
      let value = false;
      switch (mode) {
        case 'system':
          value = window.matchMedia('(prefers-color-scheme: dark)').matches;
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
