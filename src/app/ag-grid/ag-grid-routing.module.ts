import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AgGridComponentComponent } from './ag-grid-component/ag-grid-component.component';
import { AgGridTableComponent } from './ag-grid-table/ag-grid-table.component';

const routes:Routes = [
    {path:'', component:AgGridComponentComponent,
     children:[
         {path:'', component:AgGridTableComponent}
     ]
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AgGridRoutingModule{}