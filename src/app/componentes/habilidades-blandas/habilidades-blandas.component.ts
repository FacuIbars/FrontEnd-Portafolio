import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgregarHabilidadBlandaComponent } from 'src/app/editComponentes/agregar-habilidades-blanda/agregar-habilidades-blanda.component';
//import { AgregarhabilidadesBlandaComponent } from 'src/app/editComponentes/agregar-habilidadesBlanda/agregar-habilidadesBlanda.component';
import { habilidadBlanda } from 'src/app/models/habilidadBlanda';
import { AppService } from 'src/app/service/app.service';
import { HabilidadBlandaService } from 'src/app/service/habilidad-blanda.service';


@Component({
  selector: 'app-habilidadBlanda',
  templateUrl: './habilidades-blandas.component.html',
  styleUrls: ['./habilidades-blandas.component.css'],
})
export class HabilidadesBlandasComponent implements OnInit {
  operacion: string = 'Agregar ';
  habilidadesBlandas: habilidadBlanda[] = [];
  modoEdit: any;
  constructor(
    private Api: HabilidadBlandaService,
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
    this.Api.listaHabilidadBlanda().subscribe(
      (data) => (this.habilidadesBlandas = data)
    );
  }

  openDialog(id?: number): void {
    const dialogRef = this.dialog.open(AgregarHabilidadBlandaComponent, {
      width: '550px',
      disableClose: true,
      data: { id: id },
     
      
    });
    console.log(id);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        setTimeout(() => {this.cargar();}, 4000)
      }
    });
  }

  eliminarhabilidadBlanda(id: number): void {
    this.Api.deleteHabilidadBlanda(id).subscribe(() => {
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
