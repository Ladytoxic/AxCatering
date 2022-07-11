import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/dataservice.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  entradasList:any;
  principalesList: any;
  pastasList: any;
  guarnicionesList: any;
  cafeteriaList:any;
  postresList: any;
  bebidasList: any;
  constructor(private datosData: DataService) { }

  ngOnInit(): void {
    this.datosData.obtenerDatos().subscribe(data => {
      this.entradasList =data.entradas;
      this.principalesList = data.platos_principales;
      this.postresList = data.postres;
      this.pastasList = data.pastas;
      this.guarnicionesList = data.guarniciones;
      this.cafeteriaList = data.cafeteria;
      this.bebidasList =data.bebidas;
    })
  }

}
