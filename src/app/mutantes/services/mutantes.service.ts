import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceMutante, MutantesActivos } from '../interfaces/mutantes.interface';
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
    return this.http.get<MutantesActivos>(`https://rest-servesr-c.herokuapp.com/api/mutantes/${ id }`);
  };
}
