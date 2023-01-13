import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {
  Operacion:String="Agregar ";
  form:FormGroup;
  loading: boolean = false;
  id: number | undefined;
  constructor(private fb:FormBuilder,private AppService: ProyectoService ,public dialogRef: MatDialogRef<AgregarProyectoComponent>,
    private mensaje: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(250)]],
      descripcion: ['', [Validators.required, Validators.maxLength(750)]],
      codigo: ['', [Validators.required, Validators.maxLength(250)]],
      resultado: ['', [Validators.required, Validators.maxLength(250)]],
    });this.id = data.id;
   }

  ngOnInit(): void {this.esEditar(this.id);
  }
  esEditar(id: number | undefined) {
    if (id !== undefined) {
      this.Operacion = 'Editar ';
      this.getProyecto(id)
    }
  }
  cancelar() {
    this.dialogRef.close(false);
    }
getProyecto(id: number) {
  this.AppService.buscarProyecto(id).subscribe(data => {
    this.form.patchValue({
      name: data.nombre,
      descripcion: data.descripcion,
      codigo: data.codigo,
      resultado:data.resultado
      
    }) 
    
  } )
  
}
    confirmar(){
    const Proyecto:Proyecto= {
      
      nombre: this.form.value.name,
      descripcion: this.form.value.descripcion,
      codigo: this.form.value.codigo,
      resultado: this.form.value.resultado

    }
    this.loading= true;
    
    if(this.id == undefined){
      //Agregar
      this.AppService.crearProyecto(Proyecto).subscribe(()=>{
       this.loading= false; 
        
      } )
    }else{
      //Editar
      this.AppService.updateProyecto(Proyecto, this.id).subscribe(data => {
      })
    }
    console.log(Proyecto)
    this.mensajeExito();
    this.dialogRef.close(true);
      
    

   }

   mensajeExito():void {
    this.mensaje.open('Operación exitosa, por favor espere.', '', {
      duration: 4000
    })
  
   } 

}
