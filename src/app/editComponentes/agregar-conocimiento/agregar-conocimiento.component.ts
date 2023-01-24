import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Conocimiento } from 'src/app/models/conocimiento';
import { ConocimientoService } from 'src/app/service/conocimiento.service';

@Component({
  selector: 'app-agregar-conocimiento',
  templateUrl: './agregar-conocimiento.component.html',
  styleUrls: ['./agregar-conocimiento.component.css'],
})
export class AgregarConocimientoComponent implements OnInit {
  Operacion: String = 'Agregar ';
  loading: boolean = false;
  id: number | undefined;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private AppService: ConocimientoService,
    public dialogRef: MatDialogRef<AgregarConocimientoComponent>,
    private mensaje: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      lenguaje: ['', [Validators.required, Validators.maxLength(250)]],
      skill: ['', Validators.required],
    });
    this.id = data.id;
  }

  ngOnInit(): void {
    this.esEditar(this.id);
  }
  esEditar(id: number | undefined) {
    if (id !== undefined) {
      this.Operacion = 'Editar ';
      this.getConocimiento(id);
      console.log(this.Operacion);
    }
  }

  cancelar() {
    this.dialogRef.close(false);
  }
  getConocimiento(id: number) {
    this.AppService.buscarConocimiento(id).subscribe((data) => {
      this.form.patchValue({
        lenguaje: data.lenguaje,
        skill: data.skill,
      });
    });
  }
  confirmar() {
    const Conocimiento: Conocimiento = {
      lenguaje: this.form.value.lenguaje,
      skill: this.form.value.skill,
    };
    this.loading = true;

    if (this.id == undefined) {
      //Agregar
      this.AppService.crearConocimiento(Conocimiento).subscribe(() => {
        this.loading = false;
      });
    } else {
      //Editar
      this.AppService.updateConocimiento(Conocimiento, this.id).subscribe(
        (data) => {}
      );
    }
    this.mensajeExito();
    this.dialogRef.close(true);
  }

  mensajeExito(): void {
    this.mensaje.open('Operación exitosa, por favor espere.', '', {
      duration: 4000,
    });
  }
}
