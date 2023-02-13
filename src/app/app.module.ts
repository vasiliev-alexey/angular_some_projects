import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReusableTableDumbModule} from "@table/reusable-table-dumb/reusable-table-dumb.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReusableTableDumbModule
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
