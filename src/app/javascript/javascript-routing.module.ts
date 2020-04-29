import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
   { path:'', component:JavascriptComponent,
     children: [
         {path:'', component:HomeComponent}
     ]
   },
   {
     path: 'array', component:ArrayComponent,
     children: [
       {path:'', component: ReduceComponent},
       {path:'slice', component:SliceComponent },
       {path:'splice', component:SpliceComponent },
       {path:'push-pop', component:PushPopComponent },
       {path:'shift-unshift', component:ShiftUnshiftComponent },
       {path:'of', component:OfComponent},
       {path:'flat', component:FlatComponent}
     ]
   },
   { path:'abc', component:AbcComponent},
   { path:'clouser', component:ClosureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
