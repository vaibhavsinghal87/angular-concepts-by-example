import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShowFullText]'
})
export class ShowFullTextDirective {

  constructor(private el: ElementRef) {
    console.log(this.el);
  }

  @Input() highlightColor: string; 

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('click') onClick() {
    this.el.nativeElement.style.whiteSpace = 'normal';
  }

}
