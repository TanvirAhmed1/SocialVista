import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'http://localhost:5001/api/'

  constructor(private htto: HttpClient) { }

  login(model: any){
    return this.htto.post(this.baseUrl + 'account/login', model);
  }
}
