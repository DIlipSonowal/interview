import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { HomeComponent } from './home/home.component';
import { WhatisangularComponent } from './whatisangular/whatisangular.component';
import { ActivatedrouteComponent } from './activatedroute/activatedroute.component';
import { AotComponent } from './aot/aot.component';
import { AsyncpipeComponent } from './asyncpipe/asyncpipe.component';
import { AuthgaurdsComponent } from './authgaurds/authgaurds.component';
import { ViewComponent } from './view/view.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ObservableComponent } from './observable/observable.component';
import { OperatorComponent } from './operator/operator.component';
import { MapComponent } from './map/map.component';
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';
import { FromEventComponent } from './from-event/from-event.component';
import { ThrowErrorComponent } from './throw-error/throw-error.component';
import { ConcatComponent } from './concat/concat.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';

const routes: Routes = [
    { path:'', component: AngularComponent, 
        children: [
            { path:'', component: HomeComponent},
            { path:'whatisangular', component: WhatisangularComponent},
            { path:'activatedroute', component: ActivatedrouteComponent },
            { path:'aot', component: AotComponent },
            { path:'asyncpipe', component: AsyncpipeComponent },
            { path:'authgaurd', component: AuthgaurdsComponent },
            { path:'ngtemplate', component: NgtemplateComponent},   
            { path:'view', component: ViewComponent},
            { path:'rxjs', component: RxjsComponent,
              children: [
                  { path:'', component: ObservableComponent },
                  { path:'operator', component: OperatorComponent },
                  { path:'map', component: MapComponent },
                  { path:'of', component: OfComponent },
                  { path:'from', component:FromComponent },
                  { path:'fromEvent', component:FromEventComponent },
                  { path:'throwError', component:ThrowErrorComponent },
                  { path:'concat', component:ConcatComponent },
                  { path:'concatMap', component:ConcatMapComponent },
                  { path:'mergeMap', component:MergeMapComponent },
              ]
            }
        ]
    },
//    { path:'', redirectTo:'home/hh', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
