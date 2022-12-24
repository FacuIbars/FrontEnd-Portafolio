import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

  form:FormGroup
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      fecha: ['', Validators.required],
      img: ['', Validators.required],
      info: ['', Validators.required],
    })
   }
   


  ngOnInit(): void {
  }
  confirmar(){
    const educacion:Educacion= {
      
      nombre: this.form.value.name,
      fecha: this.form.value.fecha,
      img: this.form.value.img,
      info: this.form.value.info
    }
    console.log(educacion)
  }

}