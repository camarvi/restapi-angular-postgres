import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service';

import { UsuarioModel } from '../../models/usuario.models';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {


 usuario : UsuarioModel;

  constructor(private usuarioservice : UsuariosService) { }

  ngOnInit() {

    this.usuario = new UsuarioModel(); //Inicializar el objeto como vacio

  }

  onSubmit(){
    
    console.log("Formulario Enviado..");
    //console.log(this.usuario);

    this.usuarioservice.createUser(this.usuario)
        .subscribe( response => {
            console.log(response);
          }, error => {
            console.log(error);
         });

  }


}
