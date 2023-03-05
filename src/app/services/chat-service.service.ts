import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private http: HttpClient) { }

  getData(input : string): Observable<any>{
    return this.http.get('https://api.agify.io?name='+input,{})
  }
}
