import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message{
  constructor(public author:string,public content:string){}
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  conversation =new Subject<Message[]>();
  messageMap:any={
    "hi":"hello",
    "hai":"Hello",
    "who are you?":"my name is bhuvi AI",
    "default":"I can't understand.can you please repeat,otherwise contact with bhuvanesh"
  }
  getBotAnswer(msg:any){
    const usermsg =new Message('user',msg);
    this.conversation.next([usermsg]);
    const botmsg = new Message('bot',this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botmsg]);
    },1000);
  }
  getBotMessage(question:string){
    let answer =this.messageMap[question];
    return answer || this.messageMap['default']

  }
}

