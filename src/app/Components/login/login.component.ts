import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string="";
  password: string="";
  isCredentialsFailed: boolean=false;
  onLogin():void{

    if(this.username==="admin" && this.password==="admin"){
      this.isCredentialsFailed = false;
      console.log("Login Success")
    }
    else if(this.username===""&& this.password===""){
      this.isCredentialsFailed = true;
    }
    else{
      this.isCredentialsFailed = true;
      console.log(this.isCredentialsFailed)
      console.log("Login failed")
    }
  }
}
