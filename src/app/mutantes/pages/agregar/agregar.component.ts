import { Component, OnInit } from '@angular/core';
import { MutantesActivos } from '../../interfaces/mutantes.interface';
import { MutantesService } from '../../services/mutantes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  grupos = [

    {
      tipo:'Heroe',
      desc: 'Heroe'
    },
    {
      tipo:'Villano',
      desc: 'Villano'
    },
    

  ]

  condicion = [
    {
      tipo:'Libertad',
      desc: 'Libertad'
    },
    {
      tipo:'Detenido',
      desc: 'Detenido'
    },
    {
      tipo:'Desconocido',
      desc: 'Desconocido'
    },
  ]

  vehiculos = [

    {
      tipo:'Terrestre',
      desc: 'Terrestre'
    },
    {
      tipo:'Aereo',
      desc: 'Aereo'
    },
    {
      tipo:'No necesita',
      desc: 'No necesita'
    },

  ]

  mutante: MutantesActivos = {

    nombre:'',
    grupo:'',
    condicion:'',
    superPoder:'',
    vehiculo:'',
    lugarDeOperacion:'',
    estado: true,

  }

  
  constructor( private mutanteservice: MutantesService,
                private activatedroute:ActivatedRoute,
                private router: Router,   ) { }

  ngOnInit(): void {

    if( this.router.url.includes('editar') ) {
      
    this.activatedroute.params
    .subscribe( ({id}) => this.mutante._id = id )


    }


  }

  guardar() {
    if( this.mutante.nombre.trim().length === 0 ){

      alert(' Todos los campos son obligatorios')    
      return ;

    } else if(this.mutante.grupo.trim().length === 0) {

      alert(' Todos los campos son obligatorios')    
      return ;

    } else if( this.mutante.condicion.trim().length === 0 ) {

      alert(' Todos los campos son obligatorios')    
      return ;  
      
    } else if( this.mutante.superPoder.trim().length === 0 ){
      alert(' Todos los campos son obligatorios')    
      return ;

    } else if( this.mutante.vehiculo.trim().length === 0 ){

      alert(' Todos los campos son obligatorios')    
      return ;

    } else if( this.mutante.lugarDeOperacion.trim().length === 0 ) {

      alert(' Todos los campos son obligatorios')    
      return ;

    } 

    if( this.mutante._id ) { 

      this.mutanteservice.actualizarMutante( this.mutante )
        .subscribe( mutanteActualizado =>  alert('Mutante Actualizado, dirijase al listado de mutantes') )
      
     

    } else {
        
         this.mutanteservice.agregarMutante( this.mutante )
          .subscribe( mutanteCreado => {  
            this.router.navigate(['/mutantes']); 
            alert(`Mutante creado con exito`)
          }) 

         
    }


  }

  borrarMutante(){
    this.mutanteservice.borrarMutante( this.mutante._id! )
      .subscribe( mutanteBorrado => {
       
        this.router.navigate(['/mutantes']);
        alert(`Mutante elimiando`)
        
      })

  }






}
