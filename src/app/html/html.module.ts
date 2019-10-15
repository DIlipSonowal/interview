import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlRouterModule } from './html-router.module';
import {SharedModule} from '../shared.module';
import { HtmlComponent } from './html.component';
import { HomeComponent } from './home/home.component';
import { DataattributesComponent } from './dataattributes/dataattributes.component';
import { InputformelementsComponent } from './inputformelements/inputformelements.component';
import { Newhtml5Component } from './newhtml5/newhtml5.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { WebstorageComponent } from './webstorage/webstorage.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
import { WebworkersComponent } from './webworkers/webworkers.component';
import { SseComponent } from './sse/sse.component';
import { VideoComponent } from './video/video.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [HtmlComponent, HomeComponent,
  DataattributesComponent,
  InputformelementsComponent,
  Newhtml5Component,
  GeolocationComponent,
  WebstorageComponent,
  DraganddropComponent,
  WebworkersComponent,
  SseComponent,
  VideoComponent,
  TemplateComponent],
  imports: [
    CommonModule,
    HtmlRouterModule,
    SharedModule
  ]
})
export class HtmlModule { }
