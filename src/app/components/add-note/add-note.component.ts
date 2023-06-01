import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {
  showValidationErrors!:boolean;

  constructor(
    private noteService:NoteService,
    private notificationService:NotificationService,
    private router:Router
  ){}

  onSubmit(form:NgForm){
    // console.log(form.value);
    if(form.invalid){
      this.showValidationErrors=true;
      return;
    }
    const note=new Note(form.value.title,form.value.content);
    this.noteService.addNote(note);
    this.router.navigateByUrl('/notes');
    this.notificationService.showNotification('Note created...');
  }

}
