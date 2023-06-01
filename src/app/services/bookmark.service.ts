import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Bookmark } from '../models/bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService implements OnDestroy{
  private bookmarks:Bookmark[]=[];
  private storageChanges!:Subscription;

  constructor(){
    this.loadState();
    this.storageChanges= fromEvent<StorageEvent>(window, 'storage').subscribe((event: StorageEvent) =>{
      // console.log(event);  
      if(event.key === 'bookmarks') this.loadState();
    });
  }

  ngOnDestroy(){
    console.log('unsubscribe() method fired...');
    if(this.storageChanges) this.storageChanges.unsubscribe();
  }

  getBookmarksArray=()=>{
    return this.bookmarks;
  }

  getBookmark(id:string):Bookmark{
    return <Bookmark>this.bookmarks.find(bookmark=>bookmark.id===id);
  }

  addBookmark=(bookmark:Bookmark)=>{
    this.bookmarks.push(bookmark);
    this.saveState();
  }

  deleteBookmark=(id:string)=>{
    const index:number=this.bookmarks.findIndex(bookmark=>bookmark.id===id);
    if(index===-1) return;
    this.bookmarks.splice(index,1);
    this.saveState();
  }

  updateBookmark=(id:string,updatedFields:Partial<Bookmark>)=>{
    const bookmark=this.getBookmark(id);
    Object.assign(bookmark,updatedFields);
    this.saveState();
  }

  saveState(){
    localStorage.setItem('bookmarks',JSON.stringify(this.bookmarks));
  }

  loadState=()=>{
    const bookmarksInLocalStorage=localStorage.getItem('bookmarks'); 
    if(bookmarksInLocalStorage===null) return;
    const localStorageBookmarks:Bookmark[]=JSON.parse(localStorage.getItem('bookmarks') as any,(key,value)=>{
      if(key==='url') return new URL(value);
      return value;
    }); 
    this.bookmarks.length=0;
    this.bookmarks.push(...localStorageBookmarks);
  }

}
