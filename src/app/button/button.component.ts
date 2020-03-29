import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <p>
      button works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {

  // @Input() label: string;
  // @Output() action = new EventEmitter();
  private clicks = 0;
  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked() {
    // this.clicks++;
    // this.action.emit(this.clicks);
  }

}
