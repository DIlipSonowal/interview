import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {SharedModule} from '../shared.module';

@NgModule({
  declarations: [
    
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports:[],
  providers: [],
 
})
export class HomeModule { }
