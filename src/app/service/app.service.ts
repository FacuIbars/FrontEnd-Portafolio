import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conocimiento } from '../models/conocimiento';
import { Educacion } from '../models/educacion';
import { Experiencia } from '../models/experiencia';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
GetURL= "http://localhost:8080/ver/"
PostURL= "http://localhost:8080/new/"
PutURL= "http://localhost:8080/cambiar/"
DeleteURL= "http://localhost:8080/delete/"


  constructor(private Httpclient: HttpClient) { 
    
  }
  //Conocimiento
  public listaConocimiento(): Observable<Conocimiento[] >{
    return this.Httpclient.get<Conocimiento[]>(this.GetURL + "conocimiento") ;
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
  //Educacion
  public listaEducacion(): Observable<Educacion[] >{
    return this.Httpclient.get<Educacion[]>(this.GetURL + "educacion") ;
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
  //Proyecto
  public listaProyecto(): Observable<Proyecto[] >{
    return this.Httpclient.get<Proyecto[]>(this.GetURL + "proyecto") ;
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
  //Experiencia
  public listaExperiencia(): Observable<Experiencia[] >{
    return this.Httpclient.get<Experiencia[]>(this.GetURL + "experiencia") ;
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