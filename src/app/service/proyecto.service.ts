import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private endPoint=environment.endPoint;
  private GetURL= this.endPoint + "ver/"
  private PostURL = this.endPoint + "new/"
  private PutURL= this.endPoint + "cambiar/";
  private DeleteURL= this.endPoint + "delete/"
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
