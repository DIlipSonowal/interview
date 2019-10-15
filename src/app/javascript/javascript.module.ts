import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { SharedModule } from '../shared.module';
import { JavascriptComponent } from './javascript.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [JavascriptComponent, HomeComponent],
  imports: [
    JavascriptRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class JavascriptModule { }
