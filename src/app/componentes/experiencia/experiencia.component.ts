import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgregarExperienciaComponent } from 'src/app/editComponentes/agregar-experiencia/agregar-experiencia.component';
import { Experiencia } from 'src/app/models/experiencia';
import { AppService } from 'src/app/service/app.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  operacion: string = 'Agregar ';
  modoEdit: any;
  experiencias: Experiencia[]=[]
  constructor(private Api:ExperienciaService, private AppService: AppService, public dialog: MatDialog,
    private mensaje: MatSnackBar, ) { }

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
    this.Api.listaExperiencia().subscribe(data => this.experiencias=data);
  }
  openDialog(id?: number): void {
    const dialogRef = this.dialog.open(AgregarExperienciaComponent, {
      disableClose: true,
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cargar();
      }
    });
  }

  eliminarExperiencia(id: number): void {
    this.Api.deleteExperiencia(id).subscribe(() => {
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

 

  