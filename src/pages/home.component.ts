import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredProducts = [
    { id: 1, name: 'Producto 1', price: 10.99, image: 'assets/img/product1.jpg' },
    { id: 2, name: 'Producto 2', price: 15.99, image: 'assets/img/product2.jpg' },
    { id: 3, name: 'Producto 3', price: 20.99, image: 'assets/img/product3.jpg' }
  ];
}