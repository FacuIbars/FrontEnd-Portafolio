import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conocimiento } from '../models/conocimiento';
import { credenciales } from '../models/credenciales';
import { Educacion } from '../models/educacion';
import { Experiencia } from '../models/experiencia';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class AppService {



  constructor(private Httpclient: HttpClient) { 
    
  }
  


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