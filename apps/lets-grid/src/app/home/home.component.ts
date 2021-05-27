import { Component, OnInit } from '@angular/core';
import { IComponentRout } from '../common/interface';

@Component({
  selector: 'nx-sandbox-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() {
  }

  public routes: Array<IComponentRout> = [
    { link: 'centering', label: 'centering?' },
    { link: 'doc', label: 'my documents' },
    { link: 'blocks', label: 'blocks' },
    { link: 'flex', label: 'grid can be flex?' },
    { link: 'responsive', label: 'full mobile' },
    { link: 'position', label: 'until the very end' },
    { link: 'area', label: 'my area' }
  ];


}
