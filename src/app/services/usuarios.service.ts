import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URI = 'http://localhost:3000/';

  constructor(private http : HttpClient) { 

      console.log("Usuarios Service Ok");

  }


  // Devolver la lista de usuarios
  getListaUsuarios(){

    return this.http.get(this.URI + 'users');
  
  }


  createUser(data:UsuarioModel) {
    console.log(data);
    return this.http.post(this.URI + 'users' , data);
  }


}


