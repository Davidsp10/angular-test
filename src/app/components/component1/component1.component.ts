import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Loginresource } from 'src/app/models/loginresource';
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global'; 
import { Router, ActivatedRoute, Params } from '@angular/router';
import  swal  from 'sweetalert2';

@Component({
  selector: "app-component1",
  templateUrl: "./component1.component.html",
  styleUrls: ["./component1.component.css"],
  providers: [UserService]
})

export class Component1Component implements OnInit {

  public url: String;
  public user: User;
  loginResource: Loginresource;
  
  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
    this.loginResource = new Loginresource('', '');
  }

  ngOnInit() {}

  onSubmit(): void {

    if (this.loginResource.nick == '' || this.loginResource.password == '') {
      swal.fire("Error Login", "Username o password vacías!", "error");
      return;
    }
    
    console.log(this.loginResource);
    
    this._userService.login(this.loginResource).subscribe (
      (response) => {
        console.log(response);

        //let usuario = response.user;
        this._router.navigate(["/home", '1']);
        swal.fire(
          "Login",
          `Has iniciado sesión con éxito!`,
          "success"
        );
      },
      (error) => {
        console.log(error)
        if (error.status == 400) {
          swal.fire("Error Login", "Usuario o clave incorrectas!", "error");
        }
      }
    )
    
  }
}
