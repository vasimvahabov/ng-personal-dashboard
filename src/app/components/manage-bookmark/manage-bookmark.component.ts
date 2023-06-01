import { Component } from '@angular/core';
import { Bookmark } from 'src/app/models/bookmark.model';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-manage-bookmark',
  templateUrl: './manage-bookmark.component.html',
  styleUrls: ['./manage-bookmark.component.scss']
})
export class ManageBookmarkComponent {
  bookmarks!:Bookmark[];

  constructor(private bookmarkService:BookmarkService){}

  ngOnInit(){
    this.bookmarks=this.bookmarkService.getBookmarksArray();
  }
}
