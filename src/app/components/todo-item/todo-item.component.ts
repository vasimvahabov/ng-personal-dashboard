import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo!:Todo;
  
  @Output() deleteEvent:EventEmitter<void>=new EventEmitter<void>(); 
  @Output() editEvent:EventEmitter<void>=new EventEmitter<void>();

  onEdit=()=>{
    this.editEvent.emit();
  }

  onDelete=()=>{
    this.deleteEvent.emit();
  }
 
}
