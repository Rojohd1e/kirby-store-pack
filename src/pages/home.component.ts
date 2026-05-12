import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../app/models/producto';
import { ProductoService } from '../app/services/producto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productosDestacados: Producto[] = [];

  constructor(private readonly productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe((productos) => {
      this.productosDestacados = productos.slice(0, 3);
    });
  }
}
