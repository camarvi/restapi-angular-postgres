import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioModel } from '../../models/usuario.models';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  listausuarios : any[] = [];

  constructor(private usuariosService : UsuariosService) {

        this.usuariosService.getListaUsuarios()
          .subscribe(( data : any)=>{
            this.listausuarios = data;
              //console.log(data);
              console.log(this.listausuarios);
          }); 

   }

  ngOnInit() {
  }

}
