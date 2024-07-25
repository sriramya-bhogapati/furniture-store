import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.css'
})
export class CartStatusComponent {

  totalPrice=0;
  totalQuantity=0;
  constructor(private cartservice: CartService){}
  updateCartStatus(){
    this.cartservice.totalPrice.subscribe((data)=>{
      this.totalPrice=data;
    });
    //subscribe to the cart total 
    this.cartservice.totalQuantity.subscribe((data)=>{
      this.totalQuantity=data;
    });
  }
  ngOnInit(){
    this.updateCartStatus();
  }

}
