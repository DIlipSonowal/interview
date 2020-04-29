import { ElementRef, Directive, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppChbgcolor]'
})
export class AppChbgcolorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    el.nativeElement.style.color='red';
        }
       // @HostBinding('style.color') color: string;
        @HostListener('click') onClick() {
   // this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'color', 'gray');
    }
    @HostBinding('style.border') border: string;
    @HostListener('mouseover') onMouseOver() {
        this.border = '5px solid green';
    }

}
