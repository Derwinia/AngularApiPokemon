import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { Demo3Component } from './demo/demo3/demo3.component';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { NavComponent } from './nav/nav.component';
import { EurtobtcPipe } from './shared/eurtobtc.pipe';
import { ExercicesComponent } from './exercices/exercices.component';
import { Exo1Component } from './exercices/exo1/exo1.component';
import { TotimePipe } from './shared/totime.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    DemoComponent,
    NavComponent,
    EurtobtcPipe,
    ExercicesComponent,
    Exo1Component,
    TotimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
