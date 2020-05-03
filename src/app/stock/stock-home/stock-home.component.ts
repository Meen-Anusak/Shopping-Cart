import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ProductService } from 'src/app/services/product.service';
import { IProducts } from 'src/app/services/product.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css'],
})
export class StockHomeComponent implements OnInit {
  displayedColumns = ['image', 'name', 'price', 'stock', 'action'];

  dataSource = new MatTableDataSource<IProducts>();
  textSearch: string;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private productS: ProductService,) {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.feedData();
  }

  feedData() {
    this.productS.getProduct().subscribe(
      (result) => {
        this.dataSource.data = result.map((item) => {
          item.image = this.productS.getImageProduct(item.image);
          return item;
        });

      },
      (error) => {},
      () => {}
    );
  }

  search(even: Event) {
    let fliterValue = '';
    if (even) {
      fliterValue = (even.target as HTMLInputElement).value;
    }
    this.dataSource.filter = fliterValue.trim().toLowerCase();
  }

  clearSearch() {
    this.textSearch = '';
    this.search(null);
  }

  onDelete(data) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Delete Product :${data.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.productS.deleteProduct(data.id).subscribe(
          (data) => {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            this.feedData();
          },

          (error) => {}
        );
      }
    });
  }
}
