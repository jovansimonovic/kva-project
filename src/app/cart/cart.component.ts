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

  increaseQuantity() {
    
  }

  decreaseQuantity() {
    
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    this.snackBar.open('Item removed from cart', 'Close', { duration: 5000 });
  }
}
