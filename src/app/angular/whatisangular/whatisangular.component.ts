import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-whatisangular',
  templateUrl: './whatisangular.component.html',
  styleUrls: ['./whatisangular.component.sass']
})
export class WhatisangularComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    //console.log(this.activatedRoute.url.subscribe(url=> console.log(url)));
  }

}
