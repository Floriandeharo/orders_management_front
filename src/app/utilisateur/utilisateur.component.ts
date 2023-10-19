import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  utilisateurs :any ;

  constructor(
    private router: Router,
    private utilisateurService: UtilisateurService
  ) { }

  ngOnInit(): void {
    this.getUtilisateurs()
  }


  getUtilisateurs() {

    this.utilisateurService.getUtilisateurs().subscribe((response) => {
      this.utilisateurs = response.utilisateurs;
      
    });


  };

  SupprimerUtilisateur(id: any){
    this.utilisateurService.deleteUtilisateur(id).subscribe((response) => {
      
      this.getUtilisateurs()
    });

  }


}
