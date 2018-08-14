import { Directive, HostListener, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverElement]'
})
export class HoverElementDirective {

  @HostBinding('style.fontWeight') fontWeight: string;

  constructor(
    private elementReference: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseenter') onHoverIn() {
    this.fontWeight = 'bold';
    this.elementReference.nativeElement.style.color = 'red';
    this.renderer.setStyle(this.elementReference.nativeElement, "fontSize", "35px");
  }

  @HostListener('mouseleave') onHoverOut() {
    this.fontWeight = 'normal';
    this.elementReference.nativeElement.style.color = 'black';
    this.renderer.setStyle(this.elementReference.nativeElement, "fontSize", "15px");
  }
}
