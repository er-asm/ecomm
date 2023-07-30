import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Signup } from '../model/seller-model';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent{

  constructor(private seller:SellerService){

  }

  sellerRegister(data:Signup):void{
    this.seller.sellerSignup(data);
  }
}
