import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:4500/api';
  env = environment;

  constructor(private http: HttpClient) { 
    if(this.env.production){
      this.apiUrl   = 'https://saint-portfolio.herokuapp.com/api';
    }
  }
  
 getMessages(){
   return this.http.get<any>(`${this.apiUrl}/message/get`)
 }

 sendMessage(data: any){
  return this.http.post<any>(`${this.apiUrl}/message/post`, data);
}

}
