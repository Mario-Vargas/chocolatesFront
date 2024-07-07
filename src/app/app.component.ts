import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CompartidoModule } from './compartido/compartido.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { IChocolate } from './interfaces/chocolate';
import { ProductoService } from './services/producto.service';
import { ProductosModule } from './productos/productos.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompartidoModule, RouterLink, HttpClientModule, NgFor, NgIf, ProductosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chocolatesFront';


}
