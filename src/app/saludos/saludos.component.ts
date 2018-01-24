import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saludos',
  templateUrl: './saludos.component.html',
  styleUrls: ['./saludos.component.css']
})
export class SaludosComponent implements OnInit {

  @Input() datoEnviado: String;

  constructor() { }

  ngOnInit() {
  }

}
