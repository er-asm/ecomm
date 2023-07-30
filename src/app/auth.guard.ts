import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SellerService } from './services/seller.service';



export const authGuard: CanActivateFn = (route, state) => {
  //inject router and seller service
  let _service = inject(SellerService);
  if(_service.isSellerLoggedIn){
    console.log("seller loggedin : Guard");
    return true;
  }
  return false;
};
