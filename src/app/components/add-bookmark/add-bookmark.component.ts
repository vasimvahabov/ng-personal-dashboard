import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookmark } from 'src/app/models/bookmark.model';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent {
  constructor(
    private bookmarkService:BookmarkService,
    private router:Router,
    private notificationService:NotificationService
  ){}

  onFormSubmit(form:NgForm){
    const {name,url}=form.value;
    // console.log(form.value);
    const bookmark=new Bookmark(name,url);
    this.bookmarkService.addBookmark(bookmark);
    this.router.navigateByUrl('/bookmarks');
    this.notificationService.showNotification('Bookmark created...');
  }

}
