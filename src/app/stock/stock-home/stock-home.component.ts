import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  displayedColumns = ['image','name','price','stock','action']

  dataSource = new MatTableDataSource<Product>();
  textSearch : string

  constructor() { }

  ngOnInit(): void {
    this.feedData()
  }

  feedData(){
    let dummyProduct : Product[] = [
      {
        name:"macbook",
        stock:1,
        price:42000,
        image:"/assets/images/product-item.png",

      },
      {
        name:"macbook",
        stock:1,
        price:42000,
        image:"/assets/images/product-item.png",

      },
      {
        name:"macbook",
        stock:1,
        price:42000,
        image:"/assets/images/product-item.png",

      },
      {
        name:"macbook",
        stock:1,
        price:42000,
        image:"/assets/images/product-item.png",

      }
    ]
    this.dataSource.data = dummyProduct;
  }

  search(even:Event){
    let fliterValue =''
    if(even){
      fliterValue = (even.target as HTMLInputElement).value;
    }
    this.dataSource.filter = fliterValue.trim().toLowerCase()
  }

  clearSearch(){
    this.textSearch = '';
    this.search(null);
  }

}
