import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly apiUrl = 'http://localhost:4500/api';

  constructor(private http: HttpClient) { }
  
 getMessages(){
   return this.http.get<any>(`${this.apiUrl}/message/get`)
 }

 sendMessage(data: any){
  return this.http.post<any>(`${this.apiUrl}/message/post`, data);
}

}
