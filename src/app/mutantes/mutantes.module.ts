import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { MutanteComponent } from './pages/mutante/mutante.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MutaRoutingModule } from './muta-routing.module';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    MutanteComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    MutaRoutingModule,
  ]
})
export class MutantesModule { }
