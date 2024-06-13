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
    const productExists = CartService.cart.some(
      (item) => item.id === product.id
    );

    if (!productExists) {
      product.quantity = 1;
      CartService.cart.push(product);
    } else {
      product.quantity += 1;
    }

    localStorage.setItem('cart', JSON.stringify(CartService.cart));
    this.snackBar.open('Item added to cart', 'Close', { duration: 5000 });
  }

  // returns all items in cart
  getCartItems() {
    return CartService.cart;
  }
}
