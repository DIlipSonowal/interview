import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from './shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { DirectiveDirective } from './angular/directive.directive';
import { AgGridModule } from 'ag-grid-angular';
import { KannadaComponent } from './kannada/kannada.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    PagenotfoundComponent,
    KannadaComponent,
    // DirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  entryComponents:[DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
