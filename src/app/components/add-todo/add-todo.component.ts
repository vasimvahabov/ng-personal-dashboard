import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { NotificationService } from 'src/app/services/notification.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  public showValidationErrors!:boolean;

  constructor(
    private todoService:TodoService,
    private router:Router,
    private notificationService:NotificationService
  ){}

  onSubmit(form:NgForm){
    // console.log(form.value);
    if(form.invalid){
      this.showValidationErrors=true;
      return;
    } 
    const todo=new Todo(form.value.text);
    this.todoService.addTodo(todo);
    this.router.navigateByUrl('/todos');
    this.notificationService.showNotification('Todo created...');
  }
}
