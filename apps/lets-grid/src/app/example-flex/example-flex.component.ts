import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-sandbox-example-flex',
  templateUrl: './example-flex.component.html',
  styleUrls: ['./example-flex.component.scss']
})
export class ExampleFlexComponent {
  numbers = [];

  constructor() {
    for (let i = 1; i < 13; i++) {
      this.numbers.push(i);
    }
  }

}
