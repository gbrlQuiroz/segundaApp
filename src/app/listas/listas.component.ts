import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {
  datos: Array<Object>;

  constructor() {
    // this.datos = ['uno', 'dos', 'tres'];
    this.datos = [
      { id: '6', nombre: 'lupita', edad: '61' },
      { id: '9', nombre: 'gabriel', edad: '41' },
      { id: '69', nombre: 'elianid', edad: '33' },
      { id: '99', nombre: 'ivone', edad: '41' },
      { id: '66', nombre: 'laura', edad: '35' },
      { id: '3', nombre: 'lourdes', edad: '40' }
    ];
  }

  ngOnInit() {}

  mostrarMas(_dato) {
    alert(`${_dato.nombre} tiene la edad de: ${_dato.edad}`);
  }
}
