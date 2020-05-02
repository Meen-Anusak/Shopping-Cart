import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducts } from './product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Products = environment.URL+ "product"


  constructor(private http : HttpClient) { }

  getProduct() :Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.Products)
  }


  getImageProduct(image:string){
    if(image){
      return environment.URL+"images/" + image
    }else{
      return "src/assets/images/no-image.png"
    }
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete<any>(this.Products + '/' + id)
  }

  createProduct(product):Observable<any>{
    return this.http.post(this.Products,product)
  }
}
