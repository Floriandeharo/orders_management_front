import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UtilisateurFormComponent } from './utilisateur-form/utilisateur-form.component';
import { FormsModule } from '@angular/forms';
import { UtilisateurReadComponent } from './utilisateur-read/utilisateur-read.component';

@NgModule({
  declarations: [

    AppComponent,
    UtilisateurComponent,
    UtilisateurFormComponent,
    UtilisateurReadComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
