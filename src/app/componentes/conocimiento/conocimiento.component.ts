import { Component, OnInit } from '@angular/core';
import { Conocimiento } from 'src/app/models/conocimiento';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-conocimiento',
  templateUrl: './conocimiento.component.html',
  styleUrls: ['./conocimiento.component.css']
})

export class ConocimientoComponent implements OnInit {
conocimientos: Conocimiento[]=[]
  constructor(private AppService:AppService ) { }

  ngOnInit(): void {
    this.cargar();
  }
  cargar():void{
    this.AppService.listaConocimiento().subscribe(data => this.conocimientos=data);
  }

}
