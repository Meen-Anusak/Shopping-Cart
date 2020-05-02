import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  imagePreview:string | ArrayBuffer;

  form:FormGroup

  constructor(
    private builder : FormBuilder,
    private productS : ProductService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.CreateFormProduct();
  }

  CreateFormProduct(){
    this.form = this.builder.group({
      name:['',[Validators.required]],
      price:['',[Validators.required]],
      stock:['',[Validators.required]],
      image:['',[Validators.required]]
    })
  }

  onSubmit(){
    if(this.form.invalid) return;
    console.log(this.form.value);

    this.productS.createProduct(this.form.value).subscribe(
      result =>{
        alert(result.message);
        this.router.navigate(['/stock'])
      }
    )
  }

  onPreviewImage(event){
    const mateImage = event.target.files[0];
    if(mateImage){
      const reder = new FileReader()
      reder.readAsDataURL(mateImage)
      reder.onload = () =>{
        this.imagePreview = reder.result;
      }
    }
  }


}
