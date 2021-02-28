import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactComponent } from './react.component';
import { HomeComponent } from './home/home.component';
import { ReduxcomponentComponent } from './reduxcomponent/reduxcomponent.component';
import { RenderComponent } from './render/render.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { HooksComponent } from './hooks/hooks.component';

const routes:Routes = [
    { path:'', component:ReactComponent,
      children:[
            {path:'', component: HomeComponent},
            {path:'reduxcomponents', component:ReduxcomponentComponent},
            {path:'render', component:RenderComponent},
            {path:'lifecyclehooks', component:LifecyclehooksComponent},
            {path:'reacthook', component:HooksComponent}
      ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ReactRoutingModule{}