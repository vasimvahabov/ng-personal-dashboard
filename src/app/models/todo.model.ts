export class Todo{
  public id:string;
  public completed!:boolean;

  constructor(public text:string){
    this.id=crypto.randomUUID();
  }
}