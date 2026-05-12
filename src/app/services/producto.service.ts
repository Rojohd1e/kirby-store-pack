import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private readonly productosUrl = 'data/productos.json';

  constructor(private readonly http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productosUrl);
  }

  obtenerProductoPorId(id: number): Observable<Producto | undefined> {
    return this.obtenerProductos().pipe(
      map((productos) => productos.find((producto) => producto.id === id)),
    );
  }
}
