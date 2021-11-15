import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargada =true;
  productos:Producto[]=[];
  constructor(private http:HttpClient) {
    this.cargarInfo();
  }

  private cargarInfo(){
    this.http.get<Producto[]>('https://angular-portafolio-2f5fa-default-rtdb.firebaseio.com/producto_idx.json')
    .subscribe((resp : Producto[])=>{
      
      this.productos=resp;

      setTimeout(() => {
        this.cargada=false;
      }, 2000);
     
    })
  }
}
