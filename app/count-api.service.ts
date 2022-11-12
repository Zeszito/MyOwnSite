import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountApiService {

  link = 'https://api.countapi.xyz/hit/moisesmoreira.com/visits';
  constructor(private http: HttpClient) {
  }

  doGetCount(){
    return this.http.get(this.link);
  }
}
