import { Component, Input } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
  @Input() note!:Note;
}
