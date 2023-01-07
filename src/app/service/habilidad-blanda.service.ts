import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { habilidadBlanda } from '../models/habilidadBlanda';

@Injectable({
  providedIn: 'root'
})
export class HabilidadBlandaService {
  private endPoint=environment.endPoint;
  private GetURL= this.endPoint + "ver/"
  private PostURL = this.endPoint + "new/"
  private PutURL= this.endPoint + "cambiar/";
  private DeleteURL= this.endPoint + "delete/"
  constructor(private Httpclient: HttpClient) { }
  public listaHabilidadBlanda(): Observable<habilidadBlanda[] >{
    return this.Httpclient.get<habilidadBlanda[]>(this.GetURL + "habilidadBlanda") ;
  }
  public buscarHabilidadBlanda(id:number): Observable<habilidadBlanda>{
    return this.Httpclient.get<habilidadBlanda>(this.GetURL + `habilidadBlanda/${id}`) ;
  }
  public crearHabilidadBlanda(habilidadBlanda: habilidadBlanda): Observable <any>{
    return this.Httpclient.post<any>(this.PostURL + "habilidadBlanda", habilidadBlanda)  ;
  }
  public deleteHabilidadBlanda(id: number): Observable <any>{
    return this.Httpclient.delete<any>(this.DeleteURL + `${id}/habilidadBlanda` ) ;
  }
  public updateHabilidadBlanda(habilidadBlanda: habilidadBlanda, id:number): Observable <any>{
    return this.Httpclient.put<any>(this.PutURL + `${id}/habilidadBlanda`, habilidadBlanda)
  }
}
