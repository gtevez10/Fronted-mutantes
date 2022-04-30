import { Component, Input, OnInit } from '@angular/core';
import { MutantesActivos } from '../../interfaces/mutantes.interface';

@Component({
  selector: 'app-mutante-tarjeta',
  templateUrl: './mutante-tarjeta.component.html',
  styleUrls: ['./mutante-tarjeta.component.css']
})
export class MutanteTarjetaComponent implements OnInit {

  @Input() mutante!: MutantesActivos;

  constructor() { }

  ngOnInit(): void {
  }

}
