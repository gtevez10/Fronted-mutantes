import { Component, OnInit } from '@angular/core';
import { MutantesActivos } from '../../interfaces/mutantes.interface';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  grupos = [
    {
      tipo:'Heroe',
      
    },
    {
      tipo: 'Villano'
    }
  ]

  condicion = [
    {
      tipo:'Libertad'
    },
    {
      tipo:'Detenido'
    },
    {
      tipo:'Desconocido'
    },
  ]

  vehiculos = [
    {
      tipo:'Terrestre',
    },
    {
      tipo:'Aereo',
    },
    {
      tipo:'No necesita',
    }
  ]

  mutantes: MutantesActivos = {

    nombre:'',
    grupo:'',
    condicion:'',
    superPoder:'',
    vehiculo:'',
    lugarDeOperacion:'',
    estado: true,

  }

  constructor() { }

  ngOnInit(): void {
  }

}
