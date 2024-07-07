import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    EncabezadoComponent
  ],
  imports: [
    CommonModule, RouterLink
  ],
  exports: [
    EncabezadoComponent
  ]
})
export class CompartidoModule { }
