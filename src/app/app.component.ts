import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'square';
  lugares:any =[
    {active:true,nombre:'Floreria'},
    {active:true,nombre:'Donas'},
    {active:true,nombre:'Veterinaria'},
    {active:false,nombre:'sushi'},
    {active:true,nombre:'hotel'},
    {active:false,nombre:'zapateria'}
];
lat: number = 6.26463;
lng: number = -75.5687959;
  constructor(){

  }

}
