import { Injectable } from '@angular/core';
import { iPhoto } from './i-photo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  photos:iPhoto[] = [];
  constructor(private http:HttpClient) { }
  apiUrl:string = "https://jsonplaceholder.typicode.com/photos";
  getPhotos():Observable<iPhoto[]>{
    return this.http.get<iPhoto[]>(this.apiUrl);
  }
}
