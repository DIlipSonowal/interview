import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {HomeComponent} from './home.component';


const routes: Routes = [
    { path:'', component: HomeComponent,  children: [
      { path:'hh', component: HeaderComponent},   
    ]
  },
//    { path:'', redirectTo:'home/hh', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
