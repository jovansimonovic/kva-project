import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products!: Array<Product>;
  filteredProducts!: Array<Product>;
  selectedCategory: string = 'All';

  totalProducts!: number;
  paginatedProducts!: Array<Product>;
  pageSize = 10;
  currentPage = 0;
  pageSizeOptions = [5, 10, 15, 20];
  showPageSizeOptions = true;

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    this.filteredProducts = this.products;
    this.totalProducts = this.products.length;
    this.paginateProducts();
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}

  // handles page change
  handlePageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.paginateProducts();
  }

  // paginates products array
  paginateProducts() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.filteredProducts!.slice(startIndex, endIndex);
  }

  // filters products based on the search input value
  doSearch(inputValue: string) {
    const searchTerm = inputValue.trim().toLowerCase();

    if (searchTerm) {
      this.filteredProducts = this.products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm)
      );
    } else {
      this.filteredProducts = this.products;
    }

    this.totalProducts = this.filteredProducts.length;
    this.currentPage = 0;
    this.paginateProducts();
  }

  // filters products by selected category
  filterByCategory() {
    console.log(this.selectedCategory);

    if (this.selectedCategory === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (product) => product.category === this.selectedCategory
      );
    }

    this.cdr.detectChanges();
  }

  // redirects to product details component
  // and passes the id of clicked product
  viewProductDetails(id: number) {
    this.router.navigate(['/product-list', id]);
  }

  // adds item to cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
