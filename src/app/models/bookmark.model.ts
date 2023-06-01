export class Bookmark{
  public id!:string;
  public name!:string;
  public url!:URL;

  constructor(name:string,url:string){
    this.id=crypto.randomUUID(); 
    this.url=new URL(url); 
    if(!name) name=this.url.hostname;
    this.name=name;
  }
}