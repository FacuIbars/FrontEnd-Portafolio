import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyectos: Proyecto[]=[]
  constructor(private AppService:AppService ) { }

  ngOnInit(): void {
    this.cargar();
  }
  cargar():void{
    this.AppService.listaProyecto().subscribe(data => this.proyectos=data);
  }

}