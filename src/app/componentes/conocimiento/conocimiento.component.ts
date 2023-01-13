import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgregarConocimientoComponent } from 'src/app/editComponentes/agregar-conocimiento/agregar-conocimiento.component';
import { Conocimiento } from 'src/app/models/conocimiento';
import { AppService } from 'src/app/service/app.service';
import { ConocimientoService } from 'src/app/service/conocimiento.service';

@Component({
  selector: 'app-conocimiento',
  templateUrl: './conocimiento.component.html',
  styleUrls: ['./conocimiento.component.css'],
})
export class ConocimientoComponent implements OnInit {
  operacion: string = 'Agregar ';
  conocimientos: Conocimiento[] = [];
  modoEdit: any;
  constructor(
    private Api: ConocimientoService,
    private AppService: AppService,
    public dialog: MatDialog,
    private mensaje: MatSnackBar
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
    this.Api.listaConocimiento().subscribe(
      (data) => (this.conocimientos = data)
    );
  }

  openDialog(id?: number): void {
    const dialogRef = this.dialog.open(AgregarConocimientoComponent, {
      width: '550px',
      disableClose: true,
      data: { id: id },
     
      
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        setTimeout(() => {this.cargar();}, 4000)
      }
    });
  }

  eliminarConocimiento(id: number): void {
    this.Api.deleteConocimiento(id).subscribe(() => {
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
