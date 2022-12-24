import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones: Educacion[]=[]
  constructor(private AppService:AppService ) { }

  ngOnInit(): void {
    this.cargar();
    
  }
  cargar():void{
    this.AppService.listaEducacion().subscribe(data => this.educaciones=data);
  }

}
