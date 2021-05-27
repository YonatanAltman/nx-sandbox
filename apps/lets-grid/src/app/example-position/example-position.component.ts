import { Component } from '@angular/core';

@Component({
  selector: 'nx-sandbox-example-position',
  templateUrl: './example-position.component.html',
  styleUrls: ['./example-position.component.scss']
})
export class ExamplePositionComponent {

  numbers = [];

  constructor() {
    for (let i = 1; i < 5; i++) {
      this.numbers.push(i);
    }
  }
}
