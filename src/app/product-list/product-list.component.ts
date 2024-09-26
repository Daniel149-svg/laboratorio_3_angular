import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { name: 'Cable USB', stock: 10 },
    { name: 'Monitor LG', stock: 3 },
    { name: 'Cable C', stock: 7 },
    { name: 'Audifonos', stock: 2 },
    { name: 'Mause', stock: 5 },
    { name: 'Teclado', stock: 4 },
    { name: 'UPS', stock: 9 },
    { name: 'Lapto dell', stock: 5 }
  ];
}
