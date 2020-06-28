import { Component, OnInit } from '@angular/core';
import { Humanresource } from 'src/app/models/humanresource';
import { Human } from '../../models/human';
import { Stats } from '../../models/stats';
import { UserService } from '../../services/user.service';
import { HumanService } from '../../services/human.service';
import { Global } from '../../services/global'; 
import { Router, ActivatedRoute, Params } from '@angular/router';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-nomutants',
  templateUrl: './nomutants.component.html',
  styleUrls: ['./nomutants.component.css'],
  providers: [UserService, HumanService]
})
export class NomutantsComponent implements OnInit {

  humanResource: Humanresource;
  stats:  Stats;
  public humansNM: Human[];
  public url: String;

  constructor(
    private _userService: UserService,
    private _humanService: HumanService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.humanResource = new Humanresource('', null);
    this.humansNM = [];
    this.stats =  new Stats(null, null, null);
    this.url = Global.url;
  }

  ngOnInit() {
    
    this._route.params.subscribe(params => {
      let id = params['userId'];
      this.humanResource.userId = id;
      this.humanResource.name = '';

      this._userService.dataUser(id).subscribe(

        (response) => {
          console.log(response.humans);
          for(let i = 0; i < response.humans.length; i++) {
            console.log(response.humans[i].mutantStatus)
            if(response.humans[i].mutantStatus  == false) {
              this.humansNM.push(response.humans[i]);
            }
          }
          //this.humans = response.humans;
          console.log(this.humansNM);
        },
        (error) => {
          console.log(error)
          if (error.status == 400) {
            swal.fire("Error", "Error al consultar datos!", "error");
          }
        }
      )
    });

    // const menuItems = document.querySelectorAll(".mItem");
    // menuItems.forEach((menuItem) => {
    //   menuItem.addEventListener("click", changeColor);
    // });

    // function changeColor() {
    //   menuItems.forEach((menuItem) => menuItem.classList.remove("red"));
    //   this.classList.add("red");
    // }

    let counter = 1;

    let menu = document.getElementById("hamburguerMenu");
    menu.addEventListener("click", modifyMenu);

    function modifyMenu() {
      if (counter == 1) {
        document.getElementById("menu-content").style.display = "block";
        counter = 0;
      } else {
        counter = 1;
        document.getElementById("menu-content").style.display = "none";
      }
    }

  }

  showModal(): void {
    document.getElementById("newHumanModal").style.display = "flex";
  }  

  getResults(): void {
    
    this._userService.getStats(this.humanResource.userId).subscribe (
      (response) => {
        document.getElementById("analyzerResults").style.display = "flex";
        console.log(response);
        
        this.stats = response;
      },
      (error) => {
        console.log(error);
        if (error.status == 400) {
          swal.fire("Error", "Ocurrió un error inesperado.", "error");
        }
      }
    )  
    
  }

  onSubmit(): void {

    if (this.humanResource.name == '') {
      swal.fire("Error!", "Nombre sin datos!", "error");
      return;
    }
    
    console.log(this.humanResource);
    
    this._humanService.sendHuman(this.humanResource).subscribe (
      (response) => {
        console.log(response);
        document.getElementById("newHumanModal").style.display = "none";
        
        //let usuario = response.user;
        this._router.navigate(["/home", '1']);
        swal.fire(
          "Datos guardados",
          `Humano guardado correctamente!`,
          "success"
        );
      },
      (error) => {
        console.log(error);
        document.getElementById("newHumanModal").style.display = "none";

        if (error.status == 400) {
          swal.fire("Error", "Ocurrió un error inesperado.", "error");
        }
      }
    )  
  }

}
