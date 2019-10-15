import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { CssRoutingModule } from './css-route.module';
import { CssComponent } from './css.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [HomeComponent, CssComponent],
  imports: [
    CssRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class CssModule { }
