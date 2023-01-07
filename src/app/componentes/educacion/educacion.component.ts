import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgregarEducacionComponent } from 'src/app/editComponentes/agregar-educacion/agregar-educacion.component';
import { Educacion } from 'src/app/models/educacion';
import { AppService } from 'src/app/service/app.service';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  operacion: string = 'Agregar ';
  educaciones: Educacion[] = [];
  modoEdit: any;
  constructor(
    private Api: EducacionService,
    public dialog: MatDialog,
    private mensaje: MatSnackBar,
    private AppService: AppService
  ) {}

  ngOnInit(): void {
    if (this.AppService.getToken() == null) {
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
    this.cargar();
  }
  cargar(): void {
    this.Api.listaEducacion().subscribe((data) => (this.educaciones = data));
  }

  openDialog(id?: number): void {
    const dialogRef = this.dialog.open(AgregarEducacionComponent, {
      disableClose: true,
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cargar();
      }
    });
  }

  eliminarEducacion(id: number): void {
    this.Api.deleteEducacion(id).subscribe(() => {
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
