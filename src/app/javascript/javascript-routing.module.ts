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
import { ObjectComponent } from './object/object.component';
import { ThiskeywordComponent } from './thiskeyword/thiskeyword.component';
import { NewkeywordComponent } from './newkeyword/newkeyword.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { InheritanceComponent } from './inheritance/inheritance.component';
import { IifeComponent } from './iife/iife.component';
import { WindowComponent } from './window/window.component';

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
   { path:'clouser', component:ClosureComponent},
   { path:'objects', component:ObjectComponent},
   { path:'thiskey', component:ThiskeywordComponent},
   { path:'newkey', component:NewkeywordComponent},
   { path:'prototype', component:PrototypeComponent},
   { path:'inheritance', component:InheritanceComponent},
   { path:'iife', component:IifeComponent},
   { path:'window', component:WindowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
