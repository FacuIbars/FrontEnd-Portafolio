import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private endPoint=environment.endPoint;
  private GetURL= this.endPoint + "ver/"
  private PostURL = this.endPoint + "new/"
  private PutURL= this.endPoint + "cambiar/";
  private DeleteURL= this.endPoint + "delete/"
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
