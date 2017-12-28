import { Component } from '@angular/core';
import { ProductsModule } from './products/product.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Product App';
}
