import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NumeroAleatorioComponent } from './numero-aleatorio/numero-aleatorio.component';


@NgModule({
  declarations: [
    AppComponent,
    NumeroAleatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
