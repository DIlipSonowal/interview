import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit, 
  ContentChild, AfterContentInit, ContentChildren } from '@angular/core';
import { CompComponent } from '../comp/comp.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild(CompComponent, {static:false}) comp:CompComponent;
  @ViewChildren(CompComponent) allcomp: QueryList<CompComponent>;
  @ContentChild(CompComponent, {static:false}) contnt:CompComponent;
  @ContentChildren(CompComponent) allContent:QueryList<CompComponent>;
  messages: string[] = [
    'message1',
    'message2',
    'message3',
    'message4',
    'message5',
    'message6'
  ];
  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit(){
    //this.test.nativeElement.style.backgroundColor='red';
    //this.comp.inptmessages = "messaged changed";
    this.allcomp.toArray().forEach(msg => {
      msg.inptmessages = "changed!!!!";
    });
  }

  ngAfterContentInit(){
   // this.contnt.inptmessages = "this is also now changed!!!";
   this.allContent.toArray().forEach((contC,i) =>{
       contC.inptmessages = i+". Also changed!!!";
   });
  }
}
