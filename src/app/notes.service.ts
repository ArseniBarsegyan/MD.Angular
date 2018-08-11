import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Note } from './note';

@Injectable()
export class NotesService {
  private headers: HttpHeaders;
  private url = 'http://localhost:8300/api/notes';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  getNotes() {
    return this.http.get(this.url, {headers: this.headers});
  }

  getNoteById(id: number) {
    return this.http.get(this.url + '/' + id, {headers: this.headers});
  }

  createNote(note: Note) {
    return this.http.post(this.url, note, {headers: this.headers});
  }

  updateNote(note: Note) {
    return this.http.put(this.url + '/' + note.id, note, {headers: this.headers});
  }

  deleteNote(id: number) {
    return this.http.delete(this.url + '/' + id, {headers: this.headers});
  }
}
