

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
  api = "https://www.liverpool.com.mx/tienda/?s=";

  constructor(private http: HttpClient) { }
  

  public getCoincidencias(coincidencia: string){
    
    return this.http.get(this.api+coincidencia+"&d3106047a194921c01969dfdec083925=json");
  }
}
