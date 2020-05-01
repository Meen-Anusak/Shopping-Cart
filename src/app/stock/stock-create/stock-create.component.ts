import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  imagePreview:string | ArrayBuffer;

  form:FormGroup

  constructor(
    private builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.CreateFormProduct();
  }

  CreateFormProduct(){
    this.form = this.builder.group({
      name:[''],
      price:[''],
      stock:[''],
      image:['']
    })
  }

  onSubmit(){
    console.log(this.form.value);
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
