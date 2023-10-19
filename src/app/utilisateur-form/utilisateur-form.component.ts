import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html',
  styleUrls: ['./utilisateur-form.component.css']
})
export class UtilisateurFormComponent implements OnInit {

  utilisateur : any =  { nom:"",prenom:"",age:0,email:""};
  idUser: number | undefined;
  error: any;

  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router,
    private route: ActivatedRoute,

    ) {

      const id = this.route.snapshot.paramMap.get('id');

      if (id && !isNaN(Number(id))) {
        this.idUser = Number(id);
      }
      // this.utilisateur = { nom:"",prenom:"",age:0,email:""}
     }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {

    if(!!this.idUser){

      this.utilisateurService.getUtilisateurById(this.idUser).subscribe((response) => {
        this.utilisateur = response.user;
        console.log(this.utilisateur);
        // this.sessionToEvent(this.classes);
      });
    }else{
      this.utilisateur = { nom:"",prenom:"",age:0,email:""};
    }
  };

  newUtilisateur(){

  this.utilisateurService.newUtilisateur(this.utilisateur)
  .subscribe(
    data => {

      this.router.navigate(['utilisateur']);

  },
    error => {console.error('Error registering user:', error)
            this.error = error.statusText
  }

    );
  }

  UpdateUtilisateur(){


  this.utilisateurService.updateUtilisateur(this.utilisateur, this.idUser)
  .subscribe(
    data => {

      this.router.navigate(['utilisateur']);

  },
    error => console.error('Error registering user:', error)
    );
  }

}
