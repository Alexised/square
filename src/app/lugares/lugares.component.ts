import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'square';
  lugares: any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria '},
    {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas'},
    {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria'},
    {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'sushi'},
    {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'hotel'},
    {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'zapateria'}
];
// tslint:disable-next-line: no-inferrable-types
lat: number = 6.26463;
// tslint:disable-next-line: no-inferrable-types
lng: number = -75.5687959;

  constructor() {

  }


}
