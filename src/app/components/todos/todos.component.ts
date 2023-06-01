import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations:[
    trigger('todoItemAnim',[
      transition(':leave',[
        animate(200,style({
          opacity:0,
          height:0,
          marginBottom:0
        }))
      ])
    ])
  ]

})
export class TodosComponent {
  todos!:Todo[]; 

  constructor(private todoService:TodoService,private router:Router){}

  ngOnInit(){
    this.todos=this.todoService.getTodos();
    // console.log(this.todos);
  }

  toogleCompleted(todo:Todo){
    this.todoService.updateTodo(todo.id,{completed:!todo.completed});    
  }

  deleteTodo=(todo:Todo)=>{
    this.todoService.deleteTodo(todo.id);
  }

  editTodo(todo:Todo){
    console.log(todo);
    this.router.navigate(['/todos',todo.id]);
  }

  // trackById(index,todo:Todo){
  //   return todo.id;
  // }

}
