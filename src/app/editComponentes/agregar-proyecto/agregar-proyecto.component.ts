import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {
form:FormGroup
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      code: ['', Validators.required],
      result: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }
  confirmar(){
    const proyecto:Proyecto= {
      
      nombre: this.form.value.name,
      descripcion: this.form.value.description,
      codigo: this.form.value.code,
      resultado: this.form.value.result
    }
    console.log(proyecto)
  }

}
