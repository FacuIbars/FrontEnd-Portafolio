import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Conocimiento } from '../models/conocimiento';

@Injectable({
  providedIn: 'root'
})
export class ConocimientoService {
  private endpoint='http://localhost:8080/';
  private GetURL= this.endpoint + "ver/"
  private PostURL = this.endpoint + "new/"
  private PutURL= this.endpoint + "cambiar/";
  private DeleteURL= this.endpoint + "delete/"
  constructor(private Httpclient: HttpClient) { }
 
  public listaConocimiento(): Observable<Conocimiento[] >{
    return this.Httpclient.get<Conocimiento[]>(this.GetURL + "conocimiento") ;
  }
  public buscarConocimiento(id:number): Observable<Conocimiento>{
    return this.Httpclient.get<Conocimiento>(this.GetURL + `conocimiento/${id}`) ;
  }
  public crearConocimiento(Conocimiento: Conocimiento): Observable <any>{
    return this.Httpclient.post<any>(this.PostURL + "conocimiento", Conocimiento)  ;
  }
  public deleteConocimiento(id: number): Observable <any>{
    return this.Httpclient.delete<any>(this.DeleteURL + `${id}/conocimiento` ) ;
  }
  public updateConocimiento(Conocimiento: Conocimiento, id:number): Observable <any>{
    return this.Httpclient.put<any>(this.PutURL + `${id}/conocimiento`, Conocimiento)
  }
 
  
}
