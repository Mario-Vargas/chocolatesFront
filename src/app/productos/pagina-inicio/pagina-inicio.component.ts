import { Component, Input} from '@angular/core';
import { IChocolate } from '../../interfaces/chocolate';
import { ProductoService } from '../../services/producto.service';
@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {

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
