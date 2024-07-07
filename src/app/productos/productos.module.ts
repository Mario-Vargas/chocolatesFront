import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';



@NgModule({
  declarations: [
    PaginaInicioComponent,
    ComentariosComponent,
    ProductosComponent,
    CategoriasComponent
  ],
  imports: [
    CommonModule, CompartidoModule, NgFor, NgIf
  ],
  exports: [
    PaginaInicioComponent,
    ComentariosComponent,
    ProductosComponent
  ]
})
export class ProductosModule { }
