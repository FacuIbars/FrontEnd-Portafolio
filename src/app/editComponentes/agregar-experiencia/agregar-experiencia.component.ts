import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css'],
})
export class AgregarExperienciaComponent implements OnInit {
  Operacion: String = 'Agregar ';
  form: FormGroup;
  loading: boolean = false;
  id: number | undefined;
  constructor(
    private fb: FormBuilder,
    private AppService: ExperienciaService,
    public dialogRef: MatDialogRef<AgregarExperienciaComponent>,
    private mensaje: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(250)]],
      descripcion: ['', [Validators.required, Validators.maxLength(750)]],
      fecha: ['', Validators.required],
    });
    this.id = data.id;
  }

  ngOnInit(): void {
    this.esEditar(this.id);
  }
  esEditar(id: number | undefined) {
    if (id !== undefined) {
      this.Operacion = 'Editar ';
      this.getExperiencia(id);
    }
  }
  cancelar() {
    this.dialogRef.close(false);
  }
  getExperiencia(id: number) {
    this.AppService.buscarExperiencia(id).subscribe((data) => {
      this.form.patchValue({
        name: data.nombre,
        descripcion: data.descripcion,
        fecha: new Date(data.fecha).toISOString().slice(0, 10),
      });
    });
  }
  confirmar() {
    const experiencia: Experiencia = {
      nombre: this.form.value.name,
      descripcion: this.form.value.descripcion,
      fecha: this.form.value.fecha,
    };
    this.loading = true;

    if (this.id == undefined) {
      //Agregar
     
      this.AppService.crearExperiencia(experiencia).subscribe(() => {
        this.loading = false;
      });
    } else {
      //Editar
      this.AppService.updateExperiencia(experiencia, this.id).subscribe(
        (data) => {}
      );
    }
    console.log(experiencia)
    this.mensajeExito();
    this.dialogRef.close(true);
  }

  mensajeExito():void {
    this.mensaje.open('Operación exitosa, por favor espere.', '', {
      duration: 4000
    })
  
   } 
}
