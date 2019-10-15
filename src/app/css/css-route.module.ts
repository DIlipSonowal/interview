import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssComponent } from './css.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
     {path:'', component:CssComponent,
      children: [
          {path:'', component:HomeComponent}
      ]
     }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssRoutingModule { }
