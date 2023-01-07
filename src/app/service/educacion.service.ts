import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private endPoint=environment.endPoint;
  private GetURL= this.endPoint + "ver/"
  private PostURL = this.endPoint + "new/"
  private PutURL= this.endPoint + "cambiar/";
  private DeleteURL= this.endPoint + "delete/"
  constructor(private Httpclient: HttpClient) { }
  public listaEducacion(): Observable<Educacion[] >{
    return this.Httpclient.get<Educacion[]>(this.GetURL + "educacion") ;
  }
  public buscarEducacion(id:number): Observable<Educacion>{
    return this.Httpclient.get<Educacion>(this.GetURL + `educacion/${id}`) ;
  }
  public crearEducacion(Educacion: Educacion): Observable <any>{
    return this.Httpclient.post<any>(this.PostURL + "educacion", Educacion)  ;
  }
  public deleteEducacion(id: number): Observable <any>{
    return this.Httpclient.delete<any>(this.DeleteURL + `${id}/educacion` ) ;
  }
  public updateEducacion(Educacion: Educacion, id:number): Observable <any>{
    return this.Httpclient.put<any>(this.PutURL + `${id}/educacion`, Educacion)

  }
}
