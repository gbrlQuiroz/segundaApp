import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero-aleatorio',
  templateUrl: './numero-aleatorio.component.html',
  styleUrls: ['./numero-aleatorio.component.css']
})
export class NumeroAleatorioComponent implements OnInit {
  aleatorio: Number;
  colores = {};
  colorFondo: String;

  constructor() {
    this.aleatorio = Math.floor(Math.random() * 100);
    this.colorFondo = 'blue';
    this.colores = {
      background: 'red',
      color: 'white'
    };
  }

  ngOnInit() {}

  generarRandom(): String {
    return Math.floor(Math.random() * 255).toString(16);
  }

  colorHex(): String {
    this.colorFondo = '#' + this.generarRandom() + this.generarRandom() + this.generarRandom();
    // return '#' + this.generarRandom() + this.generarRandom() + this.generarRandom();
    return this.colorFondo;
  }
}
