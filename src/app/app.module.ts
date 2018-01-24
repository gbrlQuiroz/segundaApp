import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NumeroAleatorioComponent } from './numero-aleatorio/numero-aleatorio.component';
import { SaludosComponent } from './saludos/saludos.component';


@NgModule({
  declarations: [
    AppComponent,
    NumeroAleatorioComponent,
    SaludosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
