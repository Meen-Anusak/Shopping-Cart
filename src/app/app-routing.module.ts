import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockHomeComponent } from './stock/stock-home/stock-home.component';
import { StockCreateComponent } from './stock/stock-create/stock-create.component';
import { StockEditComponent } from './stock/stock-edit/stock-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'stock', pathMatch: 'full' },
  {path: 'stock',
    children: [
      { path: '', component: StockHomeComponent },
      { path: 'create', component: StockCreateComponent },
      { path: 'edit/:id', component: StockEditComponent },
    ],
  },
  { path: '**', redirectTo: 'stock',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
