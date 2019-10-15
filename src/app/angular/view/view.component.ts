import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { CompComponent } from './comp/comp.component';
import { visitAstChildren } from '@angular/compiler';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit {
  // @ViewChild('test', {static:false}) test: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  


}
