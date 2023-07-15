import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { SchemeDetails } from './schemes-details';
import { HttpClient, HttpHeaders ,HttpParams} from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
    UniqueConstraintError,
    SchemeDetails,
    
} from './schemes-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})


export class CRUDService {

  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });


  FoodHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '9d95c08d75mshae57f7f480c131ap1443f3jsn5525ed1bd303',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
  });


  
  private url = 'http://localhost:4000/';
  // User: UserLogin = {
  //   u_name: '',
  //   pass: '',
  // };

  Insert(
    Details: SchemeDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'Schemes/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(s_name: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Schemes/Read${s_name}`);
  }
  Delete(RollNumber: String): Observable<InsertedSuccess> {
    console.log(`${this.url}Schemes/Delete${RollNumber}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Schemes/Delete${RollNumber}`
    );
  }
  Update(s_name: String, Details: SchemeDetails) {
    console.log("hi");
    console.log(s_name);
    
    return this.http.put(`${this.url}Schemes/Update${s_name}`, Details, {
      headers: this.headers,
    });
  }























  // constructor() { }
  // conversation =new Subject<Message[]>();
  // messageMap:any={
  //   "hi":"hello",
  //   "hai":"Hello",
  //   "who are you?":"my name is bhuvi AI",
  //   "default":"I can't understand.can you please repeat,otherwise contact with bhuvanesh"
  // }
  // getBotAnswer(msg:any){
  //   const usermsg =new Message('user',msg);
  //   this.conversation.next([usermsg]);
  //   const botmsg = new Message('bot',this.getBotMessage(msg));
  //   setTimeout(()=>{
  //     this.conversation.next([botmsg]);
  //   },1000);
  // }
  // getBotMessage(question:string){
  //   let answer =this.messageMap[question];
  //   return answer || this.messageMap['default']

  // }
}

