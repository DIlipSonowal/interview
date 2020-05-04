import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CdkStepperNext } from '@angular/cdk/stepper';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.sass']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const observable = Observable.create(subscriber =>{
      subscriber.next(1);
      subscriber.next(4);
      subscriber.next(5);
      subscriber.next(3);
      subscriber.next(2);
    })

    observable.subscribe(x=>{
    //  console.log('x = ',x);
    })
  }

}
