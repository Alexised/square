import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'square';

  // tslint:disable-next-line: no-inferrable-types
  lat: number = 6.26463;
  // tslint:disable-next-line: no-inferrable-types
  lng: number = -75.5687959;
  lugares = null;
  constructor(private lugaresService: LugaresService) {
    lugaresService.getLugares()
      .subscribe(lugares => {
        this.lugares = lugares;
      })
  }


}
