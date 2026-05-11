import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home.component';
import { LoginComponent } from '../pages/login.component';
import { RegisterComponent } from '../pages/register.component';
import { CatalogoComponent } from '../pages/catalogo.component';
import { ProductoComponent } from '../pages/producto.component';
import { PagoComponent } from '../pages/pago.component';
import { ContactoComponent } from '../pages/contacto.component';
import { AboutUsComponent } from '../pages/about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '**', redirectTo: '' }
];
