import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { StudioComponentsModule } from '@praisecharts/studio-angular/dist';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudioComponentsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
