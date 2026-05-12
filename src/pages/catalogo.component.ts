import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../app/models/producto';
import { ProductoService } from '../app/services/producto.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  productos: Producto[] = [];
  cargando = true;

  constructor(private readonly productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe((productos) => {
      this.productos = productos;
      this.cargando = false;
    });
  }
}
