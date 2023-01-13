import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgregarProyectoComponent } from 'src/app/editComponentes/agregar-proyecto/agregar-proyecto.component';
import { Proyecto } from 'src/app/models/proyecto';
import { AppService } from 'src/app/service/app.service';

import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  operacion: string = 'Agregar ';
  modoEdit: any;
  proyectos: Proyecto[]=[]
  constructor(private Api:ProyectoService, private AppService: AppService, public dialog: MatDialog,
    private mensaje: MatSnackBar ) { }

  ngOnInit(): void {
    if (this.AppService.getToken() == null) {
      this.modoEdit = false;        
    }      
    else{
        this.modoEdit = true;      
    }
    this.cargar();
  }
  cargar():void{
    this.Api.listaProyecto().subscribe(data => this.proyectos=data);
  }
  openDialog(id?: number): void {
    const dialogRef = this.dialog.open(AgregarProyectoComponent, {
      disableClose: true,
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        setTimeout(() => {this.cargar();}, 4000)
        
      }
    });
  }

  eliminarProyecto(id: number): void {
    this.Api.deleteProyecto(id).subscribe(() => {
      this.cargar();
      this.mensajeExito();
    });
  }

  mensajeExito(): void {
    this.mensaje.open('Datos eliminados con exito', '', {
      duration: 2000,
    });
  }

}