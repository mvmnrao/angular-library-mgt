import { Directive, ElementRef, OnInit, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit {
  @HostBinding('style.fontSize') fontSize: string;
  // private elRef: ElementRef;
  // constructor(elRef: ElementRef) {
  //   this.elRef = elRef; // Below is the short cut for this.
  // }

  constructor(
    private elRef: ElementRef, //This is short cut for above code.
    private renderer: Renderer2
  ){
  }

  ngOnInit() {
    //console.log(this.elRef.nativeElement);
    //console.log(this.elRef.nativeElement.value);
    //this.elRef.nativeElement.setStyle
    this.renderer.setStyle(this.elRef.nativeElement, "color", "darkcyan");
    this.fontSize = "30px";
  }
}