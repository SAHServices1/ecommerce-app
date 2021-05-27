import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httClient:HttpClient) { }

  createProduct(productBody: any){
    const productUrl = 'http://localhost:4200/products';
    return this.httClient.post(productUrl, productBody);
  }

  viewProduct(productID: any){
    const productUrl = 'http://localhost:4200/products'+productID;
    return this.httClient.get(productUrl);
  }

  updateProduct(productBody: any, productID: any){
    const productUrl = 'http://localhost:4200/products'+productID;
    return this.httClient.put(productUrl, productBody);
  }

  deleteProduct(productID: any){
    const productUrl = 'http://localhost:4200/products'+productID;
    return this.httClient.delete(productUrl);
  }

  searchCategoryProduct(categoryID: any){
    const productUrl = 'http://localhost:4200/products/category='+categoryID;
    return this.httClient.get(productUrl);
  }

  serachDateProduct(dateParam: any){
    const productUrl = 'http://localhost:4200/products/date='+dateParam;
    return this.httClient.get(productUrl);
  }
}
