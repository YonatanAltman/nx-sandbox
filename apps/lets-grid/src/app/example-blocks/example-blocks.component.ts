import { Component } from '@angular/core';

@Component({
  selector: 'nx-sandbox-example-blocks',
  templateUrl: './example-blocks.component.html',
  styleUrls: ['./example-blocks.component.scss']
})
export class ExampleBlocksComponent {
  numbers = [];

  constructor() {
    for (let i = 1; i < 20; i++) {
      this.numbers.push(i);
    }
  }

}
