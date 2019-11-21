import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.sass']
})
export class MergeMapComponent implements OnInit {
  displayedColumns: string[] = ['parm', 'desc'];
  dataSource:any = [
    {parm: 'project', desc:'A function that, when applied to an item emitted by the source Observable, returns an Observable.'},
    {parm: 'resultSelector', desc: 'Optional. Default is undefined.<br/>Type: ((outerValue: T, innerValue: ObservedValueOf, outerIndex: number, innerIndex: number) => R) | number.'},
    {parm: 'concurrent', desc: 'Optional. Default is Number.POSITIVE_INFINITY.<br/>Maximum number of input Observables being subscribed to concurrently.'}
  ];  

  constructor() { }

  ngOnInit() {
  }

}
