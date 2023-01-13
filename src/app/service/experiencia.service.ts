import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private endpoint='http://localhost:8080/';
  private GetURL= this.endpoint + "ver/"
  private PostURL = this.endpoint + "new/"
  private PutURL= this.endpoint + "cambiar/";
  private DeleteURL= this.endpoint + "delete/"
  constructor(private Httpclient: HttpClient) { }


  public listaExperiencia(): Observable<Experiencia[] >{
    return this.Httpclient.get<Experiencia[]>(this.GetURL + "experiencia") ;
  }
  public buscarExperiencia(id:number): Observable<Experiencia>{
    return this.Httpclient.get<Experiencia>(this.GetURL + `experiencia/${id}`) ;
  }
  public crearExperiencia(Experiencia: Experiencia): Observable <any>{
    return this.Httpclient.post<any>(this.PostURL + "experiencia", Experiencia)  ;
  }
  public deleteExperiencia(id: number): Observable <any>{
    return this.Httpclient.delete<any>(this.DeleteURL + `${id}/experiencia` ) ;
  }
  public updateExperiencia(Experiencia: Experiencia, id:number): Observable <any>{
    return this.Httpclient.put<any>(this.PutURL + `${id}/experiencia`, Experiencia)

  }
}
