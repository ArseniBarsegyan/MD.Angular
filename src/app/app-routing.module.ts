import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotesListComponent} from './notes-list/notes-list.component';
import {CreateNoteComponent} from './create-note/create-note.component';
import {NoteDetailComponent} from './note-detail/note-detail.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'notes', component: NotesListComponent},
  {path: 'notes/detail/:id', component: NoteDetailComponent},
  {path: 'notes/create', component: CreateNoteComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes)
  ],
  exports: [
    RouterModule]
})
export class AppRoutingModule {
}
