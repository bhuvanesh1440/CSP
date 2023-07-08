
import { Component,OnInit } from '@angular/core';
import {ChatService, Message } from '../../chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  message: Message[]=[];
  value:string | undefined
  a:string |undefined=""
  constructor(public chatService:ChatService){}

  ngOnInit(): void{

    this.chatService.conversation.subscribe((val)=>{
      this.message =this.message.concat(val);
    });
  }
  sendMessage(){
    this.a=this.value?.toLowerCase();
    
    this.chatService.getBotAnswer(this.a);
    this.value=''
  }

}
