import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftHeader } from './components/left-header/left-header.component';
import { MainHeader } from './components/main-header/main-header.component';
import { Timeline } from './components/timeline/timeline.component';
import { Company } from './components/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftHeader,
    MainHeader,
    Timeline,
    Company,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
