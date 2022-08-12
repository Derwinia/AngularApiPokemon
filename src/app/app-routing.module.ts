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
import { Demo5Component } from './demo/demo5/demo5.component';
import { Exo3Component } from './exercices/exo3/exo3.component';
import { Demo6Component } from './demo/demo6/demo6.component';
import { FourofourComponent } from './fourofour/fourofour.component';
import { Demo7Component } from './demo/demo7/demo7.component';
import { TargetComponent } from './demo/demo7/target/target.component';
import { Demo8Component } from './demo/demo8/demo8.component';
import { AuthguardGuard } from './shared/authguard.guard';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'demo', component : DemoComponent, children : [
    {path : 'demo1', component : Demo1Component},
    {path : 'demo2', component : Demo2Component},
    {path : 'demo3', component : Demo3Component},
    {path : 'demo4', component : Demo4Component},
    {path : 'demo5', component : Demo5Component},
    {path : 'demo6', component : Demo6Component},
    {path : 'demo7', component : Demo7Component},
    {path : 'target/:id/:truc', component : TargetComponent},
    {path : 'demo8', canActivate : [AuthguardGuard], component : Demo8Component}
  ]},
  {path : 'exercice', component : ExercicesComponent, children :[
    {path : 'exo1', component : Exo1Component},
    {path : 'exo2', component : Exo2Component},
    {path : 'exo3', component : Exo3Component},
  ]},
  {path : '404', component : FourofourComponent},
  {path : '**', redirectTo : '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
