import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { credenciales } from 'src/app/models/credenciales';
import { AppService } from 'src/app/service/app.service';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  creds: credenciales = {
    nombreUsuario: '',
    password: '',
  };
  constructor(private api: AppService, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombreUsuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(form: NgForm) {
    this.api.login(this.creds).subscribe((response) => {});
  }
  ngOnInit(): void {}
}
