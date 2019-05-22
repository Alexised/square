import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'square';
  lugares:any =[
    {cercania:1, distancia:1, active:true,nombre:'Floreria'},
    {cercania:1, distancia:1.8, active:true,nombre:'Donas'},
    {cercania:2, distancia:5, active:true,nombre:'Veterinaria'},
    {cercania:3, distancia:10, active:false,nombre:'sushi'},
    {cercania:3, distancia:35, active:true,nombre:'hotel'},
    {cercania:3, distancia:120, active:false,nombre:'zapateria'}
];
lat: number = 6.26463;
lng: number = -75.5687959;
  constructor(){

  }

}
