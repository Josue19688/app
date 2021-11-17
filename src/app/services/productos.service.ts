import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargada =true;
  productos:Producto[]=[];
  productoFiltrado : Producto[]=[];
  constructor(private http:HttpClient) {
    this.cargarInfo();
  }

  private cargarInfo(){

    return new Promise((resolve, reject)=>{
      this.http.get<Producto[]>('https://angular-portafolio-2f5fa-default-rtdb.firebaseio.com/producto_idx.json')
      .subscribe((resp : Producto[])=>{
        
        this.productos=resp;
        this.cargada=false;
    
      
      })
    })
    
  }

  getProducto(id:string){
    return this.http.get(`https://angular-portafolio-2f5fa-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino:string){
    if(this.productos.length===0){
      this.cargarInfo().then(()=>{
        this.filtrarProductos(termino);
      });
    }
   
    
  }

  private filtrarProductos(termino:string ){
    this.productos.forEach(prod=>{
      if(prod.categoria.indexOf(termino)>=0){
        this.productoFiltrado.push(prod);
      }
    })
  }
}
