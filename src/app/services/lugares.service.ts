import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    constructor(private afDB: AngularFireDatabase, private http: HttpClient ) { }
    public getLugares() {
        return this.afDB.list('lugares/').valueChanges();
    }
    public buscarLugar(id) {
        return this.lugares.filter((lugar) => {
            // tslint:disable-next-line: radix
            return lugar.id === parseInt(id);
        })[0] || null;
    }
    public guardarLugar(lugar) {
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }
    public editarLugar(lugar) {
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }
    public obtenerGeodata(dirrecion) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAL5DbMR58gvTncO4ZdsUveJGIqLWzlGas&address='+ dirrecion);
    }
    public getLugar(id) {
    return this.afDB.object('lugares/' + id).valueChanges();
    }
}
