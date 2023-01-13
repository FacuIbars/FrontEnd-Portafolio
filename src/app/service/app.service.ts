import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map, Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { credenciales } from '../models/credenciales';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private endpoint='http://localhost:8080/';
  private GetURL= this.endpoint + "ver/"
  private PutURL= this.endpoint + "cambiar/";

  constructor(private Httpclient: HttpClient) { 
    
  }
  

//Persona
public listaPersona(): Observable<Persona[] >{
  return this.Httpclient.get<Persona[]>(this.GetURL + "persona") ;
}
public updatePersona(Persona: Persona, id:number): Observable <any>{
  return this.Httpclient.put<any>(this.PutURL + `${id}/persona`, Persona)
}
public buscarPersona(id:number): Observable<Persona>{
  return this.Httpclient.get<Persona>(this.GetURL + `persona/${id}`) ;
}
//Login
login(creds:credenciales){
  return this.Httpclient.post('http://localhost:8080/auth/login', creds, {
    observe:'response'
  }).pipe(map((response: HttpResponse<any>) => {
    const body = response.body;
    const token = body.token
    localStorage.setItem('token', token);
     window.location.reload();
    return body  ;

  }))
}
getToken(){
  return localStorage.getItem('token') ;
}
}