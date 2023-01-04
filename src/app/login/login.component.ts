import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = "your username"
  password = 'superStrongPassword'

  handleLogin(){
    console.log(this.username);

  }

}
