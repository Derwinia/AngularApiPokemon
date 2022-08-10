import { Exo1Component } from './exercices/exo1/exo1.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo2Component } from './demo/demo2/demo2.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { Demo3Component } from './demo/demo3/demo3.component';
import { Demo4Component } from './demo/demo4/demo4.component';
import { Exo2Component } from './exercices/exo2/exo2.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'demo', component : DemoComponent, children : [
    {path : 'demo1', component : Demo1Component},
    {path : 'demo2', component : Demo2Component},
    {path : 'demo3', component : Demo3Component},
    {path : 'demo4', component : Demo4Component},
  ]},
  {path : 'exercice', component : ExercicesComponent, children :[
    {path : 'exo1', component : Exo1Component},
    {path : 'exo2', component : Exo2Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
