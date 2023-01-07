import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/service/app.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  modoEdit: any;
  constructor(private api:AppService, public dialog: MatDialog) { }

  ngOnInit(): void {
    
      if (this.api.getToken() == null) {
        this.modoEdit = false;        
      }      
      else{
          this.modoEdit = true;      
      }
    };
    IniciarSesion():void {
    
      const dialogRef = this.dialog.open(LoginComponent, {
        width: '550px', 
        disableClose: true,
        
      });
      dialogRef.afterClosed().subscribe(result => {
        
        
      });
      
        }
       
        cerrarSesion(){
          return localStorage.clear(), window.location.reload();
        }
  }
    
  
  




