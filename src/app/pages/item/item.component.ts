import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from '../../interfaces/productoCompleto.interface';

import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto:ProductoDescripcion={};
  id!:string;

  constructor(private route:ActivatedRoute, public productoService:ProductosService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(parametros=>{
        this.productoService.getProducto(parametros['id'])
        .subscribe((prod: ProductoDescripcion)=>{
          this.id=parametros['id'];
          this.producto=prod;
          console.log(this.id);
        })
       
      })
  }

}
