import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asyncpipe',
  templateUrl: './asyncpipe.component.html',
  styleUrls: ['./asyncpipe.component.sass']
})
export class AsyncpipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  time = new Observable( observer => {
    setInterval( ()=> observer.next( new Date().toString()), 1000);
  });

}
