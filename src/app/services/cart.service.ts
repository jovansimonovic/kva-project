import { Injectable } from '@angular/core';
import { Product } from './product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  static cart: Array<Product> = [];

  constructor(private snackBar: MatSnackBar) {}

  // adds item to cart
  addToCart(product: Product) {
    CartService.cart.push(product);
    localStorage.setItem("cart", JSON.stringify(CartService.cart));
    this.snackBar.open('Item added to cart', 'Close', { duration: 5000 });
  }

  // returns all items in cart
  getCartItems() {
    return CartService.cart;
  }
}
