import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';


@Directive({
  selector: '[changeColorClick]'
})
export class ChangeColorDirective {
@Input() changeColorClick: string;
@HostListener('mouseenter') onMouseEnter() {
    console.log(this.changeColorClick)
    this.renderer.setStyle(this.el.nativeElement, 'color', this.changeColorClick)
    }
    @HostListener('click') onClick() {
        console.log(this.changeColorClick)
        this.renderer.setStyle(this.el.nativeElement, 'color', this.changeColorClick);
        }
@HostListener('mouseleave') onMouseLeave()  {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black')
    }
  constructor(private el: ElementRef,
    private renderer: Renderer2) { 
        
    }

    
}