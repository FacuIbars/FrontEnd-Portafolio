import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/models/experiencia';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  
  form:FormGroup
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      descripcion: ['', Validators.required],
      img: ['', Validators.required],
      
    })
   }
   


  ngOnInit(): void {
  }
  confirmar(){
    const experiencia:Experiencia= {
      
      nombre: this.form.value.name,
      descripcion: this.form.value.descripcion,
      img: this.form.value.img,
      
    }
    console.log(experiencia)
  }

}