import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';


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
    this.lugar.id = Date.now();
    this.lugaresService.guardarLugar(this.lugar);
    alert('Negocio guardado ');
    this.lugar = {} ;
  }
}
