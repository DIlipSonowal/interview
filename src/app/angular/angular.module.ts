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
     ContentComponent
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
