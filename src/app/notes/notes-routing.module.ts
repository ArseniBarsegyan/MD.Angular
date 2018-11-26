import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteStartComponent } from './note-start/note-start.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { AuthGuardService } from '../auth/auth.guard.service';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const noteRoutes: Routes = [
  {
    path: '', component: NotesComponent, canActivate: [AuthGuardService], children: [
      { path: '', component: NoteStartComponent },
      { path: 'new', component: CreateNoteComponent },
      { path: ':id', component: NoteDetailComponent },
      { path: ':id/edit', component: NoteEditComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(noteRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ]
})
export class NotesRoutingModule {
}
