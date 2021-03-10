import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { ProductControlComponent } from './product/product-control/product-control.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductShopComponent } from './product/product-shop/product-shop.component';
import { ProductComponent } from './product/product/product.component';
import { ProductsComponent } from './product/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
 { path: '', redirectTo: '/products', pathMatch: 'full' },
 { path: 'product-control', component: ProductControlComponent },
 { path: 'products', component: ProductsComponent },
 { path: 'product', component: ProductComponent },
 { path: 'product-list', component: ProductListComponent },
 { path: 'products/:id', component: ProductDetailComponent },
 { path: 'shopping-cart', component: ShoppingCartComponent },
 { path: 'product-shop', component: ProductShopComponent },
 { path: 'payment', component: PaymentComponent }, ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
