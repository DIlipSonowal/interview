import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.sass']
})
export class CompComponent implements OnInit {
  testText:string = "I am Dilip"; 
  @Input() inptmessages:string;
  constructor() { }

  ngOnInit() {
  }

  changeText(){
    this.testText = "I am Dilip Sonowal";
  }
}
