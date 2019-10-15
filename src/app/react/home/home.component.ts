import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title="React Interview Q/A";
  qandA: any = [
    {
      id:0,
      q:'components of Redux',
      link:'reduxcomponents'
    },

    {
      id:2,
      q:'Lifecycle hooks',
      link:'lifecyclehooks'
    },

    {
      id:1,
      q:'render()',
      link:'render'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
