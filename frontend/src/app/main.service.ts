import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }
  login(){
    console.log('enter in login service')
    return this.http.get<any>('https://testlogin.free.beeceptor.com/login');
  }
}
