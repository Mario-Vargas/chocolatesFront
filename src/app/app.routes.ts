import { Routes } from '@angular/router';
import { ComentariosComponent } from './productos/comentarios/comentarios.component';
import { PaginaInicioComponent } from './productos/pagina-inicio/pagina-inicio.component';
import { ProductosComponent } from './productos/productos/productos.component';


export const routes: Routes = [
    {path: 'comentarios', component: ComentariosComponent},
    {path: 'pagina-inicio', component: PaginaInicioComponent},
    {path: 'productos', component: ProductosComponent},
];
