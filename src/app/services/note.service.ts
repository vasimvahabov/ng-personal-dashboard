import { Injectable } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes:Note[]=[];
  private storageChanges!:Subscription;

  constructor(){
    this.loadState();
    this.storageChanges=fromEvent<StorageEvent>(window,'storage').subscribe((event:StorageEvent)=>{
      console.log(event);
      if(event.key==='notes') this.loadState();
    });  
  }

  ngOnDestroy(){
    if(this.storageChanges) this.storageChanges.unsubscribe();
  }

  getNotes(){
    return this.notes;
  }

  getNote(id:string){
    return <Note>this.notes.find(note=>note.id===id);
  }

  deleteNote(id:string){
    const index=this.notes.findIndex(note=>note.id===id);
    if(index===-1) return;
    this.notes.splice(index,1);
    this.saveState();
  }

  addNote(note:Note){
    this.notes.push(note);
    this.saveState();
  }

  updateNote(id:string,updatedFields:Partial<Note>){
    const note=this.getNote(id);
    Object.assign(note,updatedFields);
    this.saveState();
  }

  private saveState=()=>{
    localStorage.setItem('notes',JSON.stringify(this.notes));
  }

  private loadState(){
    const notesInLocalStorage=localStorage.getItem('notes');
    if(!notesInLocalStorage) return;
    const localStorageNotes=JSON.parse(notesInLocalStorage);
    this.notes.length=0;
    this.notes.push(...localStorageNotes);
  }
}
