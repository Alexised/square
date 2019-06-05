import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  lugares: any = [
    { id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion' },
    { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion' },
    { id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion' },
    { id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'sushi', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion' },
    { id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'hotel', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion' },
    { id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'zapateria', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion' }
  ];
  id = null;
  lugar: any = {};
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params.id);
    console.log(this.route.snapshot.queryParams.action2);
    console.log(this.route.snapshot.queryParams.referer);
    this.id = this.route.snapshot.params.id;
    this.lugar = this.buscarLugar();
  }

  buscarLugar() {
    return this.lugares.filter((lugar) => {

// tslint:disable-next-line: radix
      return lugar.id === parseInt(this.id);
    })[0] || null;
  }
}
