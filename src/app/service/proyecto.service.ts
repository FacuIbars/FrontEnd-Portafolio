import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private endpoint='http://localhost:8080/';
  private GetURL= this.endpoint + "ver/"
  private PostURL = this.endpoint + "new/"
  private PutURL= this.endpoint + "cambiar/";
  private DeleteURL= this.endpoint + "delete/"
  constructor(private Httpclient: HttpClient) { }
  public listaProyecto(): Observable<Proyecto[] >{
    return this.Httpclient.get<Proyecto[]>(this.GetURL + "proyecto") ;
  }
  public buscarProyecto(id:number): Observable<Proyecto>{
    return this.Httpclient.get<Proyecto>(this.GetURL + `proyecto/${id}`) ;
  }
  public crearProyecto(Proyecto: Proyecto): Observable <any>{
    return this.Httpclient.post<any>(this.PostURL + "proyecto", Proyecto)  ;
  }
  public deleteProyecto(id: number): Observable <any>{
    return this.Httpclient.delete<any>(this.DeleteURL + `${id}/proyecto` ) ;
  }
  public updateProyecto(Proyecto: Proyecto, id:number): Observable <any>{
    return this.Httpclient.put<any>(this.PutURL + `${id}/proyecto`,Proyecto)

  }
}
