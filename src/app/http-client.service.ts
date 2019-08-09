import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http:HttpClient,private router:Router) { }
  saveUserDetails(data,missurl,url2){
    let headers=new HttpHeaders().set('Content-Type','aplication/json')
    console.log(data)
    const URL='http://127.0.0.1:5050'+missurl
    console.log(URL)
      this.http.get(URL,{headers})
    .subscribe(responsedata=>{
      console.log(responsedata)
      console.log(url2)
      if(url2==="/info"||"/academic"||"/"){
        this.router.navigate([url2])
      }
     })
    }}
