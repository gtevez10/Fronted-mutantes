import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  MutantesActivos } from '../interfaces/mutantes.interface';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MutantesService {

   private baseUrl: string = environment.baseUrl;

  constructor( private http:HttpClient ) { }

  getMutantes(): Observable<MutantesActivos[]>{
    return this.http.get<MutantesActivos[]>(`${ this.baseUrl }/api/mutantes`);
  };

  getMutantePorId( id: string ):Observable<MutantesActivos> {
    return this.http.get<MutantesActivos>(`${ this.baseUrl }/api/mutantes/${ id }`);
  };

  agregarMutante( mutante: MutantesActivos ):Observable<MutantesActivos> {
    return this.http.post<MutantesActivos>(`${ this.baseUrl }/api/mutantes`, mutante);
  };

  actualizarMutante( mutante: MutantesActivos ):Observable<MutantesActivos> {
    return this.http.put<MutantesActivos>(`${ this.baseUrl }/api/mutantes/${ mutante._id }`, mutante);
  };


}
