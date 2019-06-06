import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { DebugRenderer2 } from '@angular/core/src/view/services';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  lugar: any = {};
  constructor(private lugaresService: LugaresService) {
    }
  guardarLugar() {
    var dirrecion = `${this.lugar.calle},${this.lugar.ciudad},${this.lugar.pais}`;
    this.lugaresService.obtenerGeodata(dirrecion)
        .subscribe((result) => {
        this.lugar.lat = 0;
        this.lugar.lng = 0;
        this.lugar.id = Date.now();
        this.lugaresService.guardarLugar(this.lugar);
        alert('Negocio guardado ');
        this.lugar = {} ;
        });

  }
}
