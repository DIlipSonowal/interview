import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavascriptComponent } from './javascript.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   { path:'', component:JavascriptComponent,
     children: [
         {path:'', component:HomeComponent}
     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
