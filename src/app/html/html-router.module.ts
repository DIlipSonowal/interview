import { NgModule } from '@angular/core';
import { Routes, RouterModule, RoutesRecognized } from '@angular/router'; 
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

const routes:Routes = [
    { path:'', component: HtmlComponent,
      children:[
          { path:'', component:HomeComponent },
          { path:'dataattributes', component:DataattributesComponent },
          { path:'inputformelements', component:InputformelementsComponent },
          { path:'newhtml5', component:Newhtml5Component },
          { path:'geolocation', component:GeolocationComponent },
          { path:'webstorage', component:WebstorageComponent },
          { path:'draganddrop', component:DraganddropComponent },
          { path:'webworker', component:WebworkersComponent},
          { path:'sse', component:SseComponent },
          { path:'video', component:VideoComponent },
          { path:'template', component:TemplateComponent }
      ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HtmlRouterModule{}