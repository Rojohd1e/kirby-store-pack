import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Producto } from '../app/models/producto';
import { ProductoService } from '../app/services/producto.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  producto: Producto | undefined;
  cargando = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productoService: ProductoService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      if (!id) {
        this.producto = undefined;
        this.cargando = false;
        return;
      }

      this.cargando = true;
      this.productoService.obtenerProductoPorId(id).subscribe((producto) => {
        this.producto = producto;
        this.cargando = false;
      });
    });
  }
}
