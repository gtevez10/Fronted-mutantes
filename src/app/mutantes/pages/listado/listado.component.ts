import { Component, OnInit } from '@angular/core';
import { InterfaceMutante, MutantesActivos } from '../../interfaces/mutantes.interface';
import { MutantesService } from '../../services/mutantes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  mutantes: MutantesActivos[] = [];

  constructor( private mutantesService: MutantesService ) { }

  ngOnInit(): void {

    this.mutantesService.getMutantes()
      .subscribe( (resp:any) => {
         this.mutantes = resp.mutantesActivos
      })
         
        
  }
      
}




 /*console.log(resp)
        let mio = Object.entries(resp)

        this.mutantes = mio[1][1]
        console.log(mio)
        console.log(mio[1][1])
        
        
        //console.log(this.mutantes)
        //console.log(this.mutantes[0])*/

        //console.log(resp.mutantesActivos[0].nombre) OJO ASI IMPRIMO MI DATA
