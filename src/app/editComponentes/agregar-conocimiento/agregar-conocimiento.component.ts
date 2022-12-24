import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Conocimiento } from 'src/app/models/conocimiento';

@Component({
  selector: 'app-agregar-conocimiento',
  templateUrl: './agregar-conocimiento.component.html',
  styleUrls: ['./agregar-conocimiento.component.css']
})
export class AgregarConocimientoComponent implements OnInit {

  
  form:FormGroup
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      lenguaje: ['', Validators.required],
      skill: ['', Validators.required],
     
    })
   }
   


  ngOnInit(): void {
  }
  confirmar(){
    const conocimiento:Conocimiento= {
      
     lenguaje: this.form.value.lenguaje,
      skill: this.form.value.skill,
      
    }
    console.log(conocimiento)
  }

}