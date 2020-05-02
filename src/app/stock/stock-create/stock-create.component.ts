import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Create_product.model';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  imagePreview:string | ArrayBuffer;
  file : File;
  form:FormGroup

  constructor(
    private builder : FormBuilder,
    private productS : ProductService,
    private router : Router
  ) { }

  ngOnInit(): void {

  }



  onSubmit(productForm :NgForm){
    if(productForm.invalid) return;

    const values = productForm.value;
    let product = new Product();
    product.name = values.name
    product.price = values.price
    product.stock = values.stock
    product.image = this.file

    this.productS.createProduct(product).subscribe(
      result => {
        alert(result.message)
        this.router.navigate(['/stock'])
      },
      error =>{

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
