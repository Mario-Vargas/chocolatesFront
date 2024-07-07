import { Component } from '@angular/core';
import { IChocolate } from '../../interfaces/chocolate';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  listaChocolates : IChocolate[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  constructor(private _productoService: ProductoService){
    this.getChocolates();
  }

  getChocolates(){
    this._productoService.getChocolates().subscribe(data => {
      this.listaChocolates = data;
      this.isResultLoaded = true;
    });
  }
}
