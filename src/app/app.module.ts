import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import {NotesService} from './notes.service';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthService} from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import {DropdownDirective} from './dropdown.directive';

@NgModule({
  declarations: [
    DropdownDirective,
    AppComponent,
    HeaderComponent,
    NotesListComponent,
    CreateNoteComponent,
    NoteDetailComponent,
    PageNotFoundComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    DropdownDirective
  ],
  providers: [NotesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
