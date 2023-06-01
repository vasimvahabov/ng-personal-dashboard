import { Component, Input } from '@angular/core';
import { Bookmark } from 'src/app/models/bookmark.model';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss']
})
export class BookmarkTileComponent {
  @Input() bookmark!:Bookmark;
  tileIconSrc!:string;
  faviconError!:boolean;

  ngOnInit(){
    // console.log(this.bookmark); 
    this.tileIconSrc=this.bookmark.url.origin+'/favicon.ico';    
  }

}
