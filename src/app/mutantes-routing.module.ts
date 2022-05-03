import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';



const routes:Routes = [

  {
    path: 'auth' ,
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },

  {
    path: 'mutantes',
    loadChildren: () => import('./mutantes/mutantes.module').then( m => m.MutantesModule)
  },

  //Rutas principales
  {
    path: '404',
    component: ErrorPageComponent

  },

  {
    path: '**',
    redirectTo: '404'
  },


];




@NgModule({
  
  imports: [
    RouterModule.forRoot( routes ) // Guardo mis rutas principales en el modulo RouterModule y lo exporto para que este disponoble en todo el proyecto 
  ],
  exports: [
    RouterModule
  ]
})
export class MutantesRoutingModule { }
