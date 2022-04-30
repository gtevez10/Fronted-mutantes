import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceMutante, MutantesActivos } from '../interfaces/mutantes.interface';

@Injectable({
  providedIn: 'root'
})
export class MutantesService {

  constructor( private http:HttpClient ) { }

  getMutantes(): Observable<MutantesActivos[]>{
    return this.http.get<MutantesActivos[]>('https://rest-server-c.herokuapp.com/api/mutantes');
  }
}
