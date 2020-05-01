import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/products.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  displayedColumns = ['image','name','price','stock','action']

  dataSource = new MatTableDataSource<Product>();
  textSearch : string

  @ViewChild(MatSort,{static:true}) sort:MatSort
  @ViewChild(MatPaginator,{static:true}) paginator : MatPaginator

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.feedData();
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
        name:"iphone",
        stock:2,
        price:17000,
        image:"/assets/images/product-item.png",

      },
      {
        name:"ipod",
        stock:3,
        price:5000,
        image:"/assets/images/product-item.png",

      },
      {
        name:"ipad",
        stock:4,
        price:14000,
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
