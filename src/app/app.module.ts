import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // para poder utilizar [(ngModel)]

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
/*import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { NumeroAleatorioComponent } from './numero-aleatorio/numero-aleatorio.component';
import { SaludosComponent } from './saludos/saludos.component';
import { OcultarComponent } from './ocultar/ocultar.component';
import { EstilosComponent } from './estilos/estilos.component';
import { ListasComponent } from './listas/listas.component'; */

@NgModule({
  /* declarations: [AppComponent, NumeroAleatorioComponent, SaludosComponent, OcultarComponent, EstilosComponent, ListasComponent], */
  declarations: [AppComponent, routingComponents],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
