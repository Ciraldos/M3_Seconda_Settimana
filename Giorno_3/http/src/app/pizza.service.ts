import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPizza } from './Modules/ipizza';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  apiUrl:string = 'http://localhost:3000/pizze'

  constructor(private http:HttpClient) { }//ricorda di inserire la proprietà http nel constructor per poter effettuare le chiamate

  //una tipizzazione corretta del risultato permette di avere errori che ci avvisano che stiamo sbagliando il return
  getAll():Observable<iPizza[]>{
    //return è necessario per permettere ai componenti di fare subscribe
    return this.http.get<iPizza[]>(this.apiUrl);
  }

  getById(id:number):Observable<iPizza>{
    return this.http.get<iPizza>(this.apiUrl + '/' + id);
  }


  create(newPizza:Partial<iPizza>):Observable<iPizza>{
    return this.http.post<iPizza>(this.apiUrl, newPizza)
  }

  edit(pizza:iPizza):Observable<iPizza>{
    return this.http.put<iPizza>(this.apiUrl + '/' + pizza.id, pizza)
  }

  delete(id:number):Observable<iPizza>{
    return this.http.delete<iPizza>(`${this.apiUrl}/${id}`)
  }

}
