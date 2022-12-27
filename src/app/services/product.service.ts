import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Groupcatg } from '../components/groupbycategory/groupbycategory.component';
import { Product } from '../models/product';
// import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8080/product";
  success: any;

  constructor(private httpClient: HttpClient) { }

  

  

  addProduct(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addProduct`, product);
  }

  deleteProduct(productId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteproduct/${productId}`);
  }
 
  getProductsList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}/viewproduct`)
    
  }

  getProductById(productId: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/getproductbyid/${productId}`);
  }

  

  updateProduct(productId: number, Product: Product): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/editproduct`, Product);
  }

  
  retrivegroupcatg(): Observable<Groupcatg[]>{
    return this.httpClient.get<Groupcatg[]>(`${this.baseURL}/groupcatg`)
    
  }
  

}
