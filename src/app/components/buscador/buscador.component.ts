import { Component, OnInit } from '@angular/core';
import { BuscadorService } from '../../services/buscador.service';
import { CookieService } from 'ngx-cookie-service';

export interface Coincidencias {
  coincidencia: string
}

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
  providers: [BuscadorService]
})
export class BuscadorComponent implements OnInit {

  
  cookieValue = 'UNKNOWN';
  public busquedas: string[] = [];

  public coincidencias: Coincidencias;

  public productos: any;
  public productos2: any;

  constructor(private _service: BuscadorService, private cookieService: CookieService ) {
    this.busquedas = cookieService.get('liverpool').split("|");
    this.coincidencias = {
      coincidencia: ""
    };
  }

  ngOnInit() {
  }

  getCoincidencias() {
    this.busquedas.push(this.coincidencias.coincidencia);
    this.cookieService.set( 'liverpool', this.busquedas.join("|") );

    this._service.getCoincidencias(this.coincidencias.coincidencia).subscribe(res => {
      this.productos = res;
      this.productos = this.productos.contents[0].mainContent[3].contents[0].records;
    });
  }
}
