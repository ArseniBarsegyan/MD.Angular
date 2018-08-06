import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';

@Injectable()
export class NotesService {
  private url = 'http://localhost:51869/api/notes';

  constructor(private http: HttpClient) {
  }

  getNotes() {
    return this.http.get(this.url);
  }

  getNoteById(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createNote(note: Note) {
    return this.http.post(this.url, note);
  }

  updateNote(note: Note) {
    return this.http.put(this.url + '/' + note.id, note);
  }

  deleteNote(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
