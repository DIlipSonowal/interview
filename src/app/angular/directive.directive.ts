import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

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
}
