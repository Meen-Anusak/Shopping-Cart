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


  getProductById(id:number) :Observable<IProducts>{
    return this.http.get<IProducts>(this.Products+"/"+id)
  }

  editProduct(id:number,product) :Observable<any>{
    return this.http.put<any>(this.Products+'/'+id,this.makeFormProduct(product))
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
    return this.http.post<any>(this.Products,this.makeFormProduct(product))
  }

  makeFormProduct(product:any):FormData{
    const formData =new FormData()
    formData.append('name',product.name)
    formData.append('price',product.price.toString())
    formData.append('stock',`${product.stock}`)
    formData.append('image',product.image)
    return formData
  }
}
