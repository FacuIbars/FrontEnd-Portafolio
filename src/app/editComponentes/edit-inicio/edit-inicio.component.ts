import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Persona } from 'src/app/models/persona';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-edit-inicio',
  templateUrl: './edit-inicio.component.html',
  styleUrls: ['./edit-inicio.component.css'],
})
export class EditInicioComponent {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  constructor(
    private fb: FormBuilder,
    private AppService: AppService,
    public dialogRef: MatDialogRef<EditInicioComponent>,
    private mensaje: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(250)]],
      sobreMi: ['', [Validators.required, Validators.maxLength(750)]],
      portada: ['', [Validators.required, Validators.maxLength(500)]],
      foto: ['', [Validators.required, Validators.maxLength(500)]],
    });
    this.id = data.id;
  }

  ngOnInit(): void {
    this.esEditar(this.id);
  }
  esEditar(id: number) {
    if (id !== undefined) {
      this.getPersona(id);
    }
  }
  cancelar() {
    this.dialogRef.close(false);
  }
  getPersona(id: number) {
    this.AppService.buscarPersona(id).subscribe((data) => {
      this.form.patchValue({
        nombre: data.nombre,
        sobreMi: data.sobreMi,
        portada: data.portada,
        foto: data.foto,
      });
    });
  }
  confirmar() {
    const Persona: Persona = {
      nombre: this.form.value.nombre,
      sobreMi: this.form.value.sobreMi,
      portada: this.form.value.portada,
      foto: this.form.value.foto,
    };
    this.loading = true;

    this.AppService.updatePersona(Persona, this.id).subscribe((data) => {});

    this.mensajeExito();
    this.dialogRef.close(true);
  }

  mensajeExito(): void {
    this.mensaje.open('Operación exitosa', '', {
      duration: 2000,
    });
  }
}
