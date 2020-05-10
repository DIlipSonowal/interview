import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-grid-table',
  templateUrl: './ag-grid-table.component.html',
  styleUrls: ['./ag-grid-table.component.sass']
})
export class AgGridTableComponent implements OnInit {
  title = 'app';

  columnDefs = [
      {headerName: 'Make', field: 'make' },
      {headerName: 'Model', field: 'model' },
      {headerName: 'Price', field: 'price'}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
