import { Injectable } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos:Todo[]=[];
  private storageChanges!:Subscription;

  constructor(){ 
    this.loadState();
    this.storageChanges=fromEvent<StorageEvent>(window,'storage').subscribe((event:StorageEvent)=>{
      // console.log(event);
      if(event.key==='todos') this.loadState();
    });
  }

  ngOnDestroy(){
    if(this.storageChanges) this.storageChanges.unsubscribe();
  }

  getTodos(){
    return this.todos;
  }

  getTodo(id:string){
    return <Todo>this.todos.find(todo=>todo.id===id);
  }

  updateTodo(id:string,updatedTodoFields:Partial<Todo>){
    const todo=this.getTodo(id);
    if(!todo) return;
    Object.assign(todo,updatedTodoFields);
    this.saveState();
  }

  deleteTodo(id:string){
    const index=this.todos.findIndex(todo=>todo.id===id);
    if(index===-1) return;
    this.todos.splice(index,1);
    this.saveState();
  }

  addTodo(todo:Todo){
    this.todos.push(todo);
    this.saveState();
  }

  private saveState(){
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }

  private loadState=()=>{
    const todosInLocalStorage=localStorage.getItem('todos');
    if(!todosInLocalStorage) return;
    const localStorageTodos=JSON.parse(todosInLocalStorage);
    // console.log(localStorageTodos);
    this.todos.length=0;
    this.todos.push(...localStorageTodos); 
  }
  
}
