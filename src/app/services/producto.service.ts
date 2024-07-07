import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IChocolate } from '../interfaces/chocolate';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private endpoint: string = environment.endPoint;
  private apiUrl: string = this.endpoint + 'Chocolates/';

  constructor(private http: HttpClient) { }
  // Metodo para obtener todos los productos
  getChocolates(): Observable<IChocolate[]>{return this.http.get<IChocolate[]>(`${this.apiUrl}listachocolates`);}
}
