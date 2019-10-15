import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IonicComponent} from './ionic.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'ionic', component:IonicComponent,
    children:[
        {path:'', component:HomeComponent}
    ]
  },
  { path:'', redirectTo:'/ionic', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IonicRoutingModule { }
