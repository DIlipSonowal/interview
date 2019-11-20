import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared.module';
import { MaterialRoutingModule } from './material-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    MaterialRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class MaterialModule { }
