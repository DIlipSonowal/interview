import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { ReactComponent } from './react.component';
import { ReactRoutingModule } from './react-routing.module';
import { HomeComponent } from './home/home.component';
import { ReduxcomponentComponent } from './reduxcomponent/reduxcomponent.component';
import { RenderComponent } from './render/render.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { HooksComponent } from './hooks/hooks.component';

@NgModule({
    declarations:[ReactComponent, HomeComponent, ReduxcomponentComponent, 
    RenderComponent, LifecyclehooksComponent, HooksComponent],
    imports:[CommonModule, ReactRoutingModule,SharedModule],
    providers:[],
})
export class ReactModule{}