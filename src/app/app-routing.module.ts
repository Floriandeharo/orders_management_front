import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UtilisateurFormComponent } from './utilisateur-form/utilisateur-form.component';

const routes: Routes = [
  {path: 'utilisateur', component : UtilisateurComponent},
  {path: 'utilisateur/create', component : UtilisateurFormComponent},
  {path: 'utilisateur/edit/:id', component : UtilisateurFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
