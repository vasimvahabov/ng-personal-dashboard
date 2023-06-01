import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent {
  note!:Note;

  constructor(
    private noteService:NoteService,
    private notificationService:NotificationService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(paramsMap=>{
      // console.log(paramsMap);
      const id=paramsMap.get('id');
      if(!id) return;
      this.note=this.noteService.getNote(id);
    }); 
  }

  onSubmit(form:NgForm){
    this.noteService.updateNote(this.note.id,form.value)
    this.router.navigateByUrl('/notes');
    this.notificationService.showNotification('Note updated...');
  }

  deleteNote(){
    this.noteService.deleteNote(this.note.id);
    this.router.navigateByUrl('/notes');
    this.notificationService.showNotification('Note deleted...');
  }
}
