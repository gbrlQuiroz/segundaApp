import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // para poder utilizar [(ngModel)]

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NumeroAleatorioComponent } from './numero-aleatorio/numero-aleatorio.component';
import { SaludosComponent } from './saludos/saludos.component';
import { OcultarComponent } from './ocultar/ocultar.component';
import { EstilosComponent } from './estilos/estilos.component';
import { ListasComponent } from './listas/listas.component';

@NgModule({
  declarations: [AppComponent, NumeroAleatorioComponent, SaludosComponent, OcultarComponent, EstilosComponent, ListasComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
