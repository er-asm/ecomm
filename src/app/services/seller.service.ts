import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Signup } from '../model/seller-model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

  sellerSignup(data:Signup){
    console.log("seller service call");
    return this.http.post('http://localhost:3000/sellers',data,{observe:'response'}).subscribe((result)=>{
        if(result){
          this.isSellerLoggedIn.next(true);

          this.router.navigate(['dashboard']);
        }
    });
  }
}
