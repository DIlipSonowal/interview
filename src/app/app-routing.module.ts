import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { KannadaComponent } from './kannada/kannada.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', loadChildren:() =>import('./home/home.module').then(m => m.HomeModule)},
  { path:'angular', loadChildren:() =>import('./angular/angular.module').then(m => m.AngularModule)},
  { path:'angularMaterial', loadChildren:()=> import('./material/material.module').then(m => m.MaterialModule)},
  { path:'javascript', loadChildren: ()=> import('./javascript/javascript.module').then(m => m.JavascriptModule)},
  { path:'css', loadChildren: ()=> import('./css/css.module').then(m => m.CssModule)},
  { path:'react', loadChildren: ()=> import('./react/react.module').then(m => m.ReactModule)},
  { path:'html', loadChildren: ()=> import('./html/html.module').then(m => m.HtmlModule)},
  { path:'', loadChildren:() =>import('./ionic/ionic.module').then(m => m.IonicModule)},
  { path:'aggrid', loadChildren:()=>import('./ag-grid/ag-grid.module').then(m=>m.AgGridModule)},
  { path:'pagenotfound', component: PagenotfoundComponent},
  { path:'kannada', component:KannadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
