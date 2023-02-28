import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditInicioComponent } from 'src/app/editComponentes/edit-inicio/edit-inicio.component';
import { Persona } from 'src/app/models/persona';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  modoEdit: any;
  persona: Persona[] = [];
  constructor(private AppService: AppService,
    public dialog: MatDialog,
    private mensaje: MatSnackBar) { }

  ngOnInit(): void {
    if (this.AppService.getToken() == null) {
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
    this.cargar();
  }

  cargar(): void {
    this.AppService.listaPersona().subscribe(
      (data) => (this.persona = data)
    );
  }
  openDialog(id: number): void {
    const dialogRef = this.dialog.open(EditInicioComponent, {
      width: '750px',
     
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


}
