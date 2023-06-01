export class Note{
  public id:string;;
  constructor(public title:string,public content:string){
    this.id=crypto.randomUUID();
  }
}