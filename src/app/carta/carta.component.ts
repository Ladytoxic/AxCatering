import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/dataservice.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  entradasList: any;
  empanadasList: any;
  pizzasList: any;
  principalesList: any;
  porcionesList: any;
  adicionalesList: any;
  pastasList: any;
  salsasList: any;
  cafeteriaList: any;
  dulce_saladoList: any;
  postresList: any;
  bebidasList: any;
  cervezas_vinosList: any;
  acercaDe: any;
  constructor(private datosData: DataService) { }

  ngOnInit(): void {
    this.datosData.obtenerDatos().subscribe(data => {
      this.entradasList = data.entradas;
      this.principalesList = data.platos_principales;
      this.porcionesList = data.porciones;
      this.adicionalesList = data.adicionales;
      this.postresList = data.postres;
      this.pastasList = data.pastas;
      this.salsasList = data.salsas;
      this.cafeteriaList = data.cafeteria;
      this.dulce_saladoList = data.dulce_salado;
      this.bebidasList = data.bebidas;
      this.empanadasList = data.empanadas;
      this.pizzasList = data.pizzas;
      this.cervezas_vinosList = data.cervezas_vinos;
      this.acercaDe = data;
    })
  }

}
