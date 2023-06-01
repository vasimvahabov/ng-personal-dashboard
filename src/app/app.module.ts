import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BookmarkTileComponent } from './components/bookmark-tile/bookmark-tile.component';
import { AddBookmarkComponent } from './components/add-bookmark/add-bookmark.component';
import { ManageBookmarkComponent } from './components/manage-bookmark/manage-bookmark.component';
import { FormsModule } from '@angular/forms';
import { EditBookmarkComponent } from './components/edit-bookmark/edit-bookmark.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { NotesComponent } from './components/notes/notes.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NotificationComponent } from './components/notification/notification.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    TabsComponent,
    BookmarkTileComponent,
    AddBookmarkComponent,
    ManageBookmarkComponent,
    EditBookmarkComponent,
    TodosComponent, 
    TodoItemComponent, 
    AddTodoComponent, 
    EditTodoComponent, 
    NotesComponent, 
    AddNoteComponent, 
    EditNoteComponent, 
    NoteCardComponent, 
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
