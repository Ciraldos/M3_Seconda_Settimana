import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColoraTag]'
})
export class ColoraTagDirective {

  constructor(private ref: ElementRef) { }

  ngOnInit() {
    this.setRandomBackgroundColor();
  }

  private setRandomBackgroundColor() {
    const randomColor = this.getRandomColor();
    this.ref.nativeElement.style.backgroundColor = randomColor;
  }

  private getRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
}
