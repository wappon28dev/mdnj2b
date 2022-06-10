import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './pages/home/main/main.component';
import { PageNotFoundComponent } from './pages/error/page_not_found/page_not_found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    FlexLayoutModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
