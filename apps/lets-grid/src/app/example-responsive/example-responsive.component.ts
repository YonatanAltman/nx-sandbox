import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-sandbox-example-responsive',
  templateUrl: './example-responsive.component.html',
  styleUrls: ['./example-responsive.component.scss']
})
export class ExampleResponsiveComponent {
  static label = 'So Much Room for Activities!';

  title = 'Full-Viewport Application';
  showNav = true;

  constructor() {
  }

}
