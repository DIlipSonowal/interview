import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-subbhvrsbj',
  templateUrl: './subbhvrsbj.component.html',
  styleUrls: ['./subbhvrsbj.component.sass']
})
export class SubbhvrsbjComponent implements OnInit {
  bsubject = new ReplaySubject();
  constructor() { }

  ngOnInit() {
    this.bsubject.next('dilip 1');
    this.bsubject.next(2);
    this.bsubject.next(3);
    this.bsubject.subscribe(r =>{
      console.log('r = ',r)
    });
    // this.bsubject.next(2);
    // this.bsubject.subscribe(r =>{
    //   console.log('r1 = ',r)
    // });
    // this.bsubject.next(9);
    // this.bsubject.subscribe(r =>{
    //   console.log('r2 = ',r)
    // });
    // this.bsubject.next(19);
    // this.bsubject.subscribe(r =>{
    //   console.log('r3 = ',r)
    // });
  }

}
