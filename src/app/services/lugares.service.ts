import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable()
export class LugaresService {
    lugares: any = [
        { id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion' },
        { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion' },
        { id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion' },
        { id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'sushi', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion' },
        { id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'hotel', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion' },
        { id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'zapateria', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion' }
    ];
    constructor(private afDB: AngularFireDatabase ) { }
    public getLugares() {
        return this.afDB.list('lugares/').valueChanges();
    }
    public buscarLugar(id) {
        return this.lugares.filter((lugar) => {
            // tslint:disable-next-line: radix
            return lugar.id === parseInt(id);
        })[0] || null;
    }
    public guardarLugar(lugar){
        console.log(lugar);
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }
}
