import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookmark } from 'src/app/models/bookmark.model';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent {
  bookmark!:Bookmark;
  
  constructor(
    private bookmarkService:BookmarkService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private notificationService:NotificationService
  ){}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      // console.log(paramMap);
      const bookmarkId:string=paramMap.get('id')!;
      this.bookmark=this.bookmarkService.getBookmark(bookmarkId);
    });
    // console.log(this.activatedRoute);
  }

  onSubmit(form:NgForm){
    const {name,url}=form.value;
    this.bookmarkService.updateBookmark(this.bookmark.id,{
      name,
      url:new URL(url)
    });
    this.notificationService.showNotification('Bookmark updated...');
  }

  deleteBookmark=()=>{
    this.bookmarkService.deleteBookmark(this.bookmark.id);
    this.router.navigate(['../'],{relativeTo:this.activatedRoute});
    this.notificationService.showNotification('Bookmark deleted!!!');
  }

}
