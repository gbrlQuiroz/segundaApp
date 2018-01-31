import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumeroAleatorioComponent } from './numero-aleatorio/numero-aleatorio.component';
import { SaludosComponent } from './saludos/saludos.component';
import { OcultarComponent } from './ocultar/ocultar.component';
import { EstilosComponent } from './estilos/estilos.component';
import { ListasComponent } from './listas/listas.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {
    path: 'aleatorio',
    component: NumeroAleatorioComponent
  },
  {
    path: 'saludos',
    component: SaludosComponent
  },
  {
    path: 'ocultar',
    component: OcultarComponent
  },
  {
    path: 'estilos',
    component: EstilosComponent
  },
  {
    path: 'listas',
    component: ListasComponent
  },
  {
    path: 'error404',
    component: Error404Component
  },
  {
    path: '',
    component: AcercaDeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  NumeroAleatorioComponent,
  SaludosComponent,
  OcultarComponent,
  EstilosComponent,
  ListasComponent,
  AcercaDeComponent,
  Error404Component
];
