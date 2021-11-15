import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoEquipo } from '../interfaces/info-equipo.interfaz';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina={};
  equipo:any[]=[];
  cargada=false;
  cargadaEquipo=false;

  constructor(private http:HttpClient) {

   this.cargarInfo();
   this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp:InfoPagina)=>{
      this.cargada=true;
      this.info=resp;
    })
  }

  private cargarEquipo(){
    this.http.get('https://angular-portafolio-2f5fa-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: any)=>{
      this.cargadaEquipo=true;
      this.equipo=resp;
      //console.log(resp);
    })
  }

}
