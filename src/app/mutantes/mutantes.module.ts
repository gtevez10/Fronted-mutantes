import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { MutanteComponent } from './pages/mutante/mutante.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MutaRoutingModule } from './muta-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MutanteTarjetaComponent } from './components/mutante-tarjeta/mutante-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    MutanteComponent,
    HomeComponent,
    ListadoComponent,
    MutanteTarjetaComponent,
    ImagenPipe,
    
  ],
  imports: [
    CommonModule,
    MutaRoutingModule,
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule,
  ]
})
export class MutantesModule { }
