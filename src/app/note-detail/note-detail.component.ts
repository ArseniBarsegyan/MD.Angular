import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';
import {ActivatedRoute} from '@angular/router';
import {Note} from '../note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  note: Note;
  id: number;

  constructor(private route: ActivatedRoute, private notesService: NotesService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.note = this.notesService.getNoteById(this.id);
    });
  }

  onImageClick(rootImage: HTMLImageElement, modalWindow: HTMLDivElement, modalImage: HTMLImageElement, caption: HTMLDivElement) {
    modalWindow.style.display = 'block';
    modalImage.setAttribute('src', rootImage.src);
    caption.innerHTML = rootImage.alt;
  }

  onCloseModal(modalImage: HTMLDivElement) {
    modalImage.style.display = 'none';
  }
}
