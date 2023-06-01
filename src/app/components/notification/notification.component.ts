import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NotificationData } from 'src/app/models/notification-data.model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations:[
    trigger('notificationAnim',[
      
      transition(':enter',[
      
        style({
          opacity:0,
          transform:'translateY(5px)'
        }),
      
        animate('250ms 125ms ease-out',style({
          opacity:1,
          transform:'translateY(0)'
        }))
      
      ]),

      transition(':leave',[
        animate(250,style({
          opacity:0,
          transform:'scale(0.85)'
        }))
      ])

    ])
  ]

})
export class NotificationComponent {
  notification!:NotificationData[]|null;
  timeOut!:NodeJS.Timeout; 

  constructor(private notificationService:NotificationService){}

  ngOnInit(){
    this.notificationService.notifications.subscribe((notificationData:NotificationData)=>{
      // console.log(notificationData);
      this.notification=Array(notificationData);
      // console.log(this.notification);

      clearTimeout(this.timeOut);

      this.timeOut=setTimeout(() => {
        this.notification=null;
      }, notificationData.duration);
    });
  }
}
