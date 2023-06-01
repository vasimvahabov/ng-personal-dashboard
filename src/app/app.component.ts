import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map, Observable,timer } from 'rxjs'; 

const baseStyles=style({
  position:'absolute',
  top:0,
  left:0,
  width:'100%',
  height:'100%'
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[

    trigger('routeAnim',[

      transition(':increment',[
        
        style({
          position:'relative',
          overflow:'hidden'
        }),

        query(':enter,:leave',[
          baseStyles
        ],{optional:true}),
        
        group([

          query(':leave',[
            animate('200ms ease-in',style({
              opacity:0,
              transform:'translateX(-50px)'
            }))
          ]),

          query(':enter',[
            style({
              opacity:0,
              transform:'translateX(50px)'
            }),
            animate('350ms 120ms ease-in',style({
              opacity:1,
              transform:'translateX(0)'              
            }))
          ])
        ])

      ]),

      transition(':decrement',[
        style({
          position:'relative',
          overflow:'hidden'
        }),
        
        query(':enter,:leave',[
          baseStyles
        ]),

        group([
          query(':leave',[
            animate('250ms ease-in',style({
              opacity:0,
              transform:'translateX(50px)'
            }))
          ],{optional:true}),

          query(':enter',[
            style({
              opacity:0,
              transform:'translateX(-50px)'
            }),
            animate('350ms 200ms ease-out',style({
              opacity:1,
              transform:'translateX(0)'
            }))
          ],{optional:true})
        ])

      ]),

      transition('*=>secondary',[
        
        style({
          position:'relative' 
        }),

        query(':enter,:leave',[
          baseStyles
        ],{optional:true}),

        group([

          query(':leave',[
            animate('300ms ease-in',style({
              opacity:0,
              transform:'scale(0.8)'
            }))
          ],{optional:true}),

          query(':enter',[
            style({
              opacity:0,
              transform:'scale(0.5)'
            }),
            animate('350ms 200ms ease-out',style({
              opacity:1,
              transform:'scale(1)'
            }))
          ],{optional:true})

        ])

      ]),

      transition('secondary=>*',[

        style({
          position:'relative',
        }),

        query(':enter,:leave',[
          baseStyles
        ],{optional:true}),

        group([

          query(':leave',[
            animate('300ms ease-in',style({
              opacity:0,
              transform:'scale(0.5)'
            }))
          ],{optional:true}),

          query(':enter',[
            style({
              opacity:0,
              transform:'scale(0.8)'
            }),
            animate('350ms 310ms ease-out',style({
              opacity:1,
              transform:'scale(1)'
            }))
          ],{optional:true})
          
        ])

      ])

    ]),

    trigger('bgAnim',[
      
      transition(':leave',[
        animate(3000,style({
          opacity:0
        }))
      ]),

      transition(':enter',[
        style({opacity:0}),
        animate(2000,style({
          opacity:1
        }))
      ])
    ]),

    trigger('changeBgBtn',[
      
      transition(':enter',[
        style({opacity:0}),
        animate('1s 3000ms ease-out',style({
          opacity:1
        }))
      ]),

      transition(':leave',[
        animate(1000,style({
          opacity:0
        }))
      ])
      
    ])    
  ]

})

export class AppComponent { 
  
  bgImages:string[]=['https://images.unsplash.com/photo-1434907652076-85f8401482c3?ixlib'+
                                '=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920'];

  public dateTime!:Observable<Date>;
  public loadingBGImage!:boolean;

  ngOnInit(){ 
    this.dateTime=timer(0,1000).pipe(map(()=>{
      return new Date();
    }));     

    // console.log(crypto.randomUUID());
    // this.dateTime.subscribe((response:Date)=>{
    //   console.log(response);
    // });
  }

  prepareRoute(outlet:RouterOutlet){
    if(outlet.isActivated){
      const tab=outlet.activatedRouteData['tab'];
      if(!tab) return 'secondary';
      return tab;
    }
  }

  async changeBGImage(){
    this.loadingBGImage=true;
    let response=await this.getImage(); 
    while(this.bgImages.includes(response.url)){
      response=await this.getImage();
    }
    this.bgImages.push(response.url); 
  }

  onBGImageLoad(event:Event){ 
    const imgElement=event.target as HTMLImageElement;
    const src=imgElement.src;  
    this.bgImages=this.bgImages.filter(bg=>bg===src);
    this.loadingBGImage=false; 
  }

  getImage(){
    return fetch('https://source.unsplash.com/random/1920x1080',{
      method:'HEAD',
      headers:{"Set-Cookie":"SameSite=Lax"}
    });
  }

}
