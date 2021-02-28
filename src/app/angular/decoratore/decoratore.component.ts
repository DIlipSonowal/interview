import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decoratore',
  templateUrl: './decoratore.component.html',
  styleUrls: ['./decoratore.component.sass']
})
export class DecoratoreComponent implements OnInit {
  diretv: string = `<pre>import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
  @Directive({
    selector: '[appDirective]'
  })
  export class DirectiveDirective {
  
    constructor(public el:ElementRef, renderer:Renderer2) {
      // el.nativeElement.style.backgroundColor='red';
      renderer.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
     }
    
     @HostListener('click') onMouseClick(){
       this.el.nativeElement.style.backgroundColor = 'green';
     }
  }</pre>
  <p appAppChbgcolor>decoratore works!</p>
  `;
  constructor() { }

  ngOnInit() {
  }

}
