import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css'],
})
export class AgregarEducacionComponent implements OnInit {
  Operacion: String = 'Agregar ';
  form: FormGroup;
  loading: boolean = false;
  id: number | undefined;
  constructor(
    private fb: FormBuilder,
    private AppService: EducacionService,
    public dialogRef: MatDialogRef<AgregarEducacionComponent>,
    private mensaje: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      fecha: ['', Validators.required],
      img: ['', Validators.required],
      info: ['', Validators.required],
    });
    this.id = data.id;
  }

  ngOnInit(): void {
    this.esEditar(this.id);
  }
  esEditar(id: number | undefined) {
    if (id !== undefined) {
      this.Operacion = 'Editar ';
      this.getEducacion(id);
      console.log(this.Operacion)
    }
  }
  cancelar() {
    this.dialogRef.close(false);
  }
  getEducacion(id: number) {
    this.AppService.buscarEducacion(id).subscribe((data) => {
      this.form.patchValue({
        name: data.nombre,
        fecha: new Date(data.fecha).toISOString().slice(0, 10),
        img: data.img,
        info: data.info,
      });
    });
  }
  confirmar() {
    const educacion: Educacion = {
      nombre: this.form.value.name,
      fecha: this.form.value.fecha,
      img: this.form.value.img,
      info: this.form.value.info,
    };
    this.loading = true;

    if (this.id == undefined) {
      //Agregar
      this.AppService.crearEducacion(educacion).subscribe(() => {
        this.loading = false;
      });
    } else {
      //Editar
      this.AppService.updateEducacion(educacion, this.id).subscribe(
        (data) => {}
      );
    }
    this.mensajeExito();
    this.dialogRef.close(true);
  }

  mensajeExito(): void {
    this.mensaje.open('Operación exitosa', '', {
      duration: 2000,
    });
  }
}
