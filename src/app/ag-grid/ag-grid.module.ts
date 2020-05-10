import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridRoutingModule } from './ag-grid-routing.module';
import { AgGridComponentComponent } from './ag-grid-component/ag-grid-component.component';
import { AgGridTableComponent } from './ag-grid-table/ag-grid-table.component';

@NgModule({
  declarations: [AgGridComponentComponent, AgGridTableComponent],
  imports: [
    CommonModule,
    AgGridRoutingModule
  ]
})
export class AgGridModule { }
