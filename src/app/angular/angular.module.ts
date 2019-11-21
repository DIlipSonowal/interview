import { NgModule } from '@angular/core';
import { AngularRoutingModule } from './angular-routing.module';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular.component';
import {SharedModule} from '../shared.module';
import { HomeComponent } from './home/home.component';
import { WhatisangularComponent } from './whatisangular/whatisangular.component';
import { ActivatedrouteComponent } from './activatedroute/activatedroute.component';
import { AotComponent } from './aot/aot.component';
import { AsyncpipeComponent } from './asyncpipe/asyncpipe.component';
import { AuthgaurdsComponent } from './authgaurds/authgaurds.component';
import { ViewComponent } from './view/view.component';
import { CompComponent } from './view/comp/comp.component';
import { DirectiveDirective } from './directive.directive';
import { ContentDirective } from './content.directive';
import { ContentComponent } from './view/content/content.component';
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

@NgModule({
  declarations: [
     NgtemplateComponent,
     AngularComponent,
     HomeComponent,
     WhatisangularComponent,
     ActivatedrouteComponent,
     AotComponent,
     AsyncpipeComponent,
     AuthgaurdsComponent,
     ViewComponent,
     CompComponent,
     DirectiveDirective,
     ContentDirective,
     ContentComponent,
     RxjsComponent,
     ObservableComponent,
     OperatorComponent,
     MapComponent,
     OfComponent,
     FromComponent,
     FromEventComponent,
     ThrowErrorComponent,
     ConcatComponent,
     ConcatMapComponent,
     MergeMapComponent
  ],
  imports: [
    AngularRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports:[],
  providers: [],
 
})
export class AngularModule { }
