import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {

  constructor(private elem:ElementRef) { }

  private backgroundColor(action:string){
    this.elem.nativeElement.style.backgroundColor = action;
  }
  private color(action:string){
    this.elem.nativeElement.style.color = action;
    
  }

  @HostListener('mouseenter')onMouseEnter(){
    this.color('white');
    this.backgroundColor('green')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color('');
    this.backgroundColor('')
  }

  

}
