import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conocimiento } from '../models/conocimiento';

@Injectable({
  providedIn: 'root'
})
export class ConocimientoService {
  private endPoint=environment.endPoint;
  private GetURL= this.endPoint + "ver/"
  private PostURL = this.endPoint + "new/"
  private PutURL= this.endPoint + "cambiar/";
  private DeleteURL= this.endPoint + "delete/"
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
