import { Component } from '@angular/core';

import { ProductListComponent } from './products/product-list.component';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'V1';
  links: string[] = ['welcome', 'products'];
} // END CLASS //
