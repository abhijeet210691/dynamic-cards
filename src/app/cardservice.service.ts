import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {

  constructor(private http: HttpClient) { }

  getData(){
    const baseUrl = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get<any>(baseUrl);
  }
}
