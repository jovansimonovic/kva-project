import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems!: Array<Product>;
  displayedColumns = ['name', 'image', 'size', 'price', 'options'];

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  // increases quantity of product
  increaseQuantity(id: number) {
    let itemToIncrement = this.cartItems.find((item) => item.id === id);

    if (itemToIncrement) {
      itemToIncrement.quantity += 1;
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }

  // decreases quantity of product
  decreaseQuantity(id: number) {
    let itemToDecrement = this.cartItems.find((item) => item.id === id);

    if (itemToDecrement) {
      if (itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      }
    }
  }

  // removes item from cart
  removeItem(id: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.snackBar.open('Item removed from cart', 'Close', { duration: 5000 });
  }
}
