import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
    
    title: string = "Product List";
    imageWidth: number = 50;
    products: IProduct[] = [];
    sub!: Subscription;

    constructor(private productService:ProductService) {}

    ngOnInit(): void {
      this.sub = this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = products;
        },
      });
    }

    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }

    showingImage: boolean = false;
    toggleImage(): void {
        this.showingImage = !this.showingImage;
    }

    private _listFilter: string = '';
    get listFilter() { return this._listFilter }
    set listFilter(val:string) {
      this._listFilter = val;
      this.filteredProducts = this.filterProducts(val);
    }

    filteredProducts: IProduct[] = [];
    filterProducts(val:string): IProduct[] {
      let search:string = val.toLowerCase();
      return this.products.filter(prod => prod.productName.toLowerCase().includes(search))
    }

    onNotify(message:string): void {}

} // END CLASS //