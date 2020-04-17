import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Fabricante} from './fabricante';

@Injectable({
  providedIn: 'root'
})
export class FabricanteService {
  public emissorInput=new EventEmitter<any>();
  public emissorUpdate=new EventEmitter<any>();
  constructor(private http:HttpClient) { }

  public cadastraFabricante(fabricante:Fabricante):Observable<Fabricante>{
    return this.http.post<Fabricante>('http://localhost:8080/fabricante',fabricante);
  }
  public listarFabricantes():Observable<Fabricante[]>{
    return this.http.get<Fabricante[]>('http://localhost:8080/fabricante');
  }
  public deletarFabricante(codigo:number){
    return this.http.delete('http://localhost:8080/fabricante/'+codigo);
  }

}
