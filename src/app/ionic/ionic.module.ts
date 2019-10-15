import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { IonicRoutingModule } from './ionic-routing.module';
import { IonicComponent } from './ionic.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
     IonicComponent,
     HomeComponent
  ],
  imports: [
    IonicRoutingModule,
    CommonModule,
    SharedModule
  ],
  providers: [],
 
})
export class IonicModule { }
