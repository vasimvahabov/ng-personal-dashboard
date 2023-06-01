import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookmarkComponent } from './components/add-bookmark/add-bookmark.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { EditBookmarkComponent } from './components/edit-bookmark/edit-bookmark.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { ManageBookmarkComponent } from './components/manage-bookmark/manage-bookmark.component';
import { NotesComponent } from './components/notes/notes.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {
    path:'bookmarks', component:BookmarksComponent, data:{tab:1}
  },
  {
    path:'bookmarks/add', component:AddBookmarkComponent
  },
  {
    path:'bookmarks/manage', 
    component:ManageBookmarkComponent,
    children:[{ path:':id', component:EditBookmarkComponent }]
  },
  {
    path:'todos', component:TodosComponent, data:{tab:2}
  },
  {
    path:'todos/add',component:AddTodoComponent
  },
  {
    path:'todos/:id',component:EditTodoComponent
  },
  {
    path:'notes', component:NotesComponent, data:{tab:3}
  },
  {
    path:'notes/add', component:AddNoteComponent,
  },
  {
    path:'notes/:id', component:EditNoteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
