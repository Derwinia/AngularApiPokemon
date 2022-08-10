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
import { HighlightDirective } from './shared/highlight.directive';
import { Demo4Component } from './demo/demo4/demo4.component';
import { EnfantComponent } from './demo/demo4/enfant/enfant.component';
import { Exo2Component } from './exercices/exo2/exo2.component';
import { ListeComponent } from './exercices/exo2/liste/liste.component';
import { Demo5Component } from './demo/demo5/demo5.component';




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
    TotimePipe,
    HighlightDirective,
    Demo4Component,
    EnfantComponent,
    Exo2Component,
    ListeComponent,
    Demo5Component
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
