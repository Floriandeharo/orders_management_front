import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur-read',
  templateUrl: './utilisateur-read.component.html',
  styleUrls: ['./utilisateur-read.component.css']
})
export class UtilisateurReadComponent implements OnInit {
  idUser: any;
  utilisateur: any;
  produits: any;
  total: any;
  commandes: any;
  prix_total: any;

  constructor(

    private utilisateurService: UtilisateurService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

    const id = this.route.snapshot.paramMap.get('id');

    if (id && !isNaN(Number(id))) {
      this.idUser = Number(id);
    }
  }

  ngOnInit(): void {
    this.getUser()
  }


  getUser() {
      this.utilisateurService.getUtilisateurById(this.idUser).subscribe((response) => {
        this.utilisateur = response.user;
      });
      this.getCommandeParUser();
      this.getTotalCommandeParUser();
  };


  getTotalCommandeParUser(){
    this.utilisateurService.GetTotalCommande(this.idUser).subscribe((response) => {
      this.total = response.list[0].detail[0];
      this.prix_total = response.list[0].detail[0].prix_total ;
      this.produits = response.list[0].detail[0].products_list ;
    });
  }


  getCommandeParUser(){
    this.utilisateurService.GetCommande(this.idUser).subscribe((response) => {
      this.commandes = response.total_order.total;

    });
  }


}
