import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategoria } from '../interfaces/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private endpoint: string = environment.endPoint;
  private apiUrl: string = this.endpoint + 'Categorias/';

  constructor(private http: HttpClient) { }

  // Metodo para obtener todas las categorias
  getCategorias(): Observable<ICategoria[]>{return this.http.get<ICategoria[]>(`${this.apiUrl}listacategorias`);}
}
