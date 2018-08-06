import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {NotesService} from '../notes.service';
import {Router} from '@angular/router';
import {Photo} from '../photo';
import {Note} from '../note';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  createComponentForm: FormGroup;
  description = '';

  constructor(private notesService: NotesService, private formbuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.createComponentForm = this.formbuilder.group({
      description: ['', [Validators.required]],
      file: null
    });
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.createComponentForm.controls['file'].setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        });
      };
    }
  }

  onSubmit(createComponentForm: NgForm) {
    const note = new Note(0, createComponentForm.controls['description'].value, new Date());
    const photo = new Photo(0, createComponentForm.controls['file'].value['filename'],
      0, createComponentForm.controls['file'].value['value']);
    note.photos = [photo];

    this.notesService.createNote(note).subscribe(data => {
      alert('Ok');
    }, error => {
      console.log(error);
    });
    this.router.navigate(['notes']);
  }
}
