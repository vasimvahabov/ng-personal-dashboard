import { Component } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  public notes!:Note[];

  constructor(private noteService:NoteService){}

  ngOnInit(){
    this.notes=this.noteService.getNotes();
  }
}
