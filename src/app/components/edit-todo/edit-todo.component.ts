import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { NotificationService } from 'src/app/services/notification.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent {
  public todo!:Todo;

  constructor(
    private todoService:TodoService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private notificationService:NotificationService
  ){}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(paramsMap=>{
      console.log(paramsMap);
      const id=paramsMap.get('id');
      if(!id) return;
      this.todo=this.todoService.getTodo(id);
    });
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    if(form.invalid) return;
    this.todoService.updateTodo(this.todo.id,form.value);
    this.router.navigateByUrl('/todos');
    this.notificationService.showNotification('Todo updated...');
  }

}
