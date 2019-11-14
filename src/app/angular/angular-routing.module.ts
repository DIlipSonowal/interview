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
                  { path:'', component: ObservableComponent }
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
