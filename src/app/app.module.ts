import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { IntervenantsComponent } from './home/intervenants/intervenants.component';
import { GestionDocumentsComponent } from './home/gestion-documents/gestion-documents.component';
import { GestionNotesComponent } from './home/gestion-notes/gestion-notes.component';

import { QuillModule } from 'ngx-quill';
import { GestionDictionnaireComponent } from './home/gestion-dictionnaire/gestion-dictionnaire.component';
import { AjouterProjetComponent } from './home/ajouter-projet/ajouter-projet.component';
import { MiddleCoreComponent } from './home/middle-core/middle-core.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    HomeComponent,
    IntervenantsComponent,
    GestionDocumentsComponent,
    GestionNotesComponent,
    GestionDictionnaireComponent,
    AjouterProjetComponent,
    MiddleCoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
