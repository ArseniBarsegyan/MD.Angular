import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {NotesService} from '../notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[];
  isNotesListEmpty: boolean;

  constructor(private notesService: NotesService) {
  }

  loadNotes() {
    this.notesService.getNotes().subscribe((data: Note[]) => {
      if (data !== null) {
        this.notes = data;
        this.isNotesListEmpty = false;
      } else {
        this.notes = [];
        this.isNotesListEmpty = true;
      }
    });
  }

  ngOnInit() {
    this.loadNotes();
  }
}
