import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/dataservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  myData: any;
  constructor(private datosData: DataService) { }

  ngOnInit(): void {
    this.datosData.obtenerDatos().subscribe(data => {
      this.myData = data;
  })
 }
}
