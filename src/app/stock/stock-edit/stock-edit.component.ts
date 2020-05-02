import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/Create_product.model';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  @ViewChild('formProduct',{static:true}) formProduct : NgForm

  imagePreview:string | ArrayBuffer;
  file : File;
  form:FormGroup

  constructor(
    private productS : ProductService,
    private router : Router,
    private activate : ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activate.params.subscribe(
      params =>{
        this.getProduct(params.id)
      }
    )
  }

  getProduct(id:number){
    this.productS.getProductById(id).subscribe(
      result =>{
        let {id,name,price,stock,image} = {...result}
      this.imagePreview = this.productS.getImageProduct(image)
      this.formProduct.setValue({id,name,price,stock})
      }
    )
  }


  onSubmit(productForm :NgForm){
    if(productForm.invalid) return;

    const values = productForm.value;
    let product = new Product();
    product.name = values.name
    product.price = values.price
    product.stock = values.stock
    product.image = this.file

    this.productS.editProduct(values.id,product).subscribe(
      resulr =>{
        alert(resulr.message)
        this.router.navigate(['/stock'])
      }
    )
  }

  onPreviewImage(event){
    const mateImage = event.target.files[0];
    if(mateImage){
      this.file = mateImage
      const reder = new FileReader()
      reder.readAsDataURL(mateImage)
      reder.onload = () =>{
        this.imagePreview = reder.result;
      }
    }
  }

}
