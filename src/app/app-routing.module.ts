import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo2Component } from './demo/demo2/demo2.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'demo', component : DemoComponent, children : [
    {path : 'demo1', component : Demo1Component},
    {path : 'demo2', component : Demo2Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
