import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title="HTML Interview Q/A";
  qandA: any = [
    {
      id:0,
      q:'data attributes',
      link:'dataattributes'
    },
    {
      id:6,
      q:'Drag and Drop',
      link:'draganddrop'
    },
    {
      id:1,
      q:'Form elements input type in html5',
      link:'inputformelements'
    },

    {
      id:2,
      q:'Form elements Attributes in html5',
      link:'inputformelements'
    },
    {
      id:4,
      q:'Geolocation API',
      link:'geolocation'
    },
    {
      id:3,
      q:'New Html5',
      link:'newhtml5'
    },
    {
      id:8,
      q:'SSE',
      link:'sse'
    },
    {
      id:10,
      q:'Template',
      link:'template'
    },
    {
      id:9,
      q:'Video html5',
      link:'video'
    },
    {
      id:5,
      q:'web storage',
      link:'webstorage'
    },
    {
      id:7,
      q:'Web Workers',
      link:'webworker'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
