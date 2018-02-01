import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'app-root',
  template: `<app-pm-products></app-pm-products>`,
  styleUrls: ['./app.component.css'],
  providers: [ ProductService ]
})
export class AppComponent {
  pageTitle = 'Product App';
}
