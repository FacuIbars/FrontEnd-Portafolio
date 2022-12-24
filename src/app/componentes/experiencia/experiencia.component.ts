import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[]=[]
  constructor(private AppService:AppService ) { }

  ngOnInit(): void {
    this.cargar();
    
  }
  cargar():void{
    this.AppService.listaExperiencia().subscribe(data => this.experiencias=data);
  }

}

 

  