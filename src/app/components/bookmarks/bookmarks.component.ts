import { Component } from '@angular/core';
import { Bookmark } from 'src/app/models/bookmark.model';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent {
  bookmarks!:Bookmark[];

  constructor(private bookmarkService:BookmarkService){}

  ngOnInit(){
    this.bookmarks=this.bookmarkService.getBookmarksArray();
    // console.log(this.bookmarks);
  }
}
