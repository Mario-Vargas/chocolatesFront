import { Component } from '@angular/core';
import { ICategoria } from '../../interfaces/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  listaCategorias : ICategoria[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  constructor(private _categoriaService: CategoriaService){
    this.getCategorias();
  }

  getCategorias(){
    this._categoriaService.getCategorias().subscribe(data => {
      this.listaCategorias = data;
      this.isResultLoaded = true;
    });
  }
}
