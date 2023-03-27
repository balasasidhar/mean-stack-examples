import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar', // user defined html tag
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  @Input() navTitle: string = '';
}
