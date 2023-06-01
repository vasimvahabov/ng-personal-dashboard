import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationData } from '../models/notification-data.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications:Subject<NotificationData>=new Subject<NotificationData>();
  
  // getNotification=()=>{
  //   return this.notifications.asObservable();
  // } 

  showNotification(text:string,duration=5000){
    this.notifications.next({text,duration});
  }
}
