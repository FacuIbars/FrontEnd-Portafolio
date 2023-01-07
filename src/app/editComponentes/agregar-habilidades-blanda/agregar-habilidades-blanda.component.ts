import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { habilidadBlanda } from 'src/app/models/habilidadBlanda';
import { HabilidadBlandaService } from 'src/app/service/habilidad-blanda.service';

@Component({
  selector: 'app-agregar-habilidades-blanda',
  templateUrl: './agregar-habilidades-blanda.component.html',
  styleUrls: ['./agregar-habilidades-blanda.component.css'],
})
export class AgregarHabilidadBlandaComponent {
  Operacion: String = 'Agregar ';
  loading: boolean = false;
  id: number | undefined;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private AppService: HabilidadBlandaService,
    public dialogRef: MatDialogRef<AgregarHabilidadBlandaComponent>,
    private mensaje: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      habilidad: ['', Validators.required],
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
      this.gethabilidadBlanda(id);
      console.log(this.Operacion);
    }
  }

  cancelar() {
    this.dialogRef.close(false);
  }
  gethabilidadBlanda(id: number) {
    this.AppService.buscarHabilidadBlanda(id).subscribe((data) => {
      this.form.patchValue({
        habilidad: data.habilidad,
        skill: data.skill,
      });
    });
  }
  confirmar() {
    const habilidadBlanda: habilidadBlanda = {
      habilidad: this.form.value.habilidad,
      skill: this.form.value.skill,
    };
    this.loading = true;

    if (this.id == undefined) {
      //Agregar
      this.AppService.crearHabilidadBlanda(habilidadBlanda).subscribe(() => {
        this.loading = false;
      });
    } else {
      //Editar
      this.AppService.updateHabilidadBlanda(habilidadBlanda, this.id).subscribe(
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
