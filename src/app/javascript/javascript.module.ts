import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { SharedModule } from '../shared.module';
import { JavascriptComponent } from './javascript.component';
import { HomeComponent } from './home/home.component';
import { AbcComponent } from './abc/abc.component';
import { ClosureComponent } from './closure/closure.component';
import { ArrayComponent } from './array/array.component';
import { ReduceComponent } from './array/reduce/reduce.component';
import { SliceComponent } from './array/slice/slice.component';
import { SpliceComponent } from './array/splice/splice.component';
import { PushPopComponent } from './array/push-pop/push-pop.component';
import { ShiftUnshiftComponent } from './array/shift-unshift/shift-unshift.component';
import { OfComponent } from './array/of/of.component';
import { FlatComponent } from './array/flat/flat.component';

@NgModule({
  declarations: [
    JavascriptComponent, 
    HomeComponent, 
    AbcComponent, 
    ClosureComponent, ArrayComponent, ReduceComponent, SliceComponent, SpliceComponent, PushPopComponent, ShiftUnshiftComponent, OfComponent, FlatComponent
  ],
  imports: [
    JavascriptRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class JavascriptModule { }
