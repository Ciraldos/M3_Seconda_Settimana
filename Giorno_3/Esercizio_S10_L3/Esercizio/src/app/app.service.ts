import { Injectable } from '@angular/core';
import { iProduct } from './i-product';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiUrl:string = 'https://dummyjson.com/products/'

  constructor(private http:HttpClient) { }

  getProducts():Observable<iProduct[]>{
      return this.http.get<{ products: iProduct[] }>(this.apiUrl)
        .pipe(map(response => response.products));
    }
 }


