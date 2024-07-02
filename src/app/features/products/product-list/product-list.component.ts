import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Book A', price: 9.99 },
    { id: 2, name: 'Book B', price: 14.99 },
    { id: 3, name: 'Notebook', price: 4.99 },
    { id: 4, name: 'Pen Set', price: 2.99 },
    // Add more products as needed
  ];
}
