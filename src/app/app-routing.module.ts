import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserComponent } from './auth/user/user.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductControlComponent } from './product/product-control/product-control.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductShopComponent } from './product/product-shop/product-shop.component';
import { ProductComponent } from './product/product/product.component';
import { ProductsComponent } from './product/products.component';
import { ProfileComponent } from './profile/profile.component';
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
 { path: 'address', component: AddressComponent },
 { path: 'payment', component: PaymentComponent }, 
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent },
 { path: 'profile', component: ProfileComponent },
 { path: 'favorites', component: FavoriteListComponent },  ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
