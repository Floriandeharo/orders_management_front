import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UtilisateurFormComponent } from './utilisateur-form/utilisateur-form.component';
import { UtilisateurReadComponent } from './utilisateur-read/utilisateur-read.component';

const routes: Routes = [
  {path: 'utilisateur', component : UtilisateurComponent},
  {path: 'utilisateur/create', component : UtilisateurFormComponent},
  {path: 'utilisateur/edit/:id', component : UtilisateurFormComponent},
  {path: 'utilisateur/read/:id', component : UtilisateurReadComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
