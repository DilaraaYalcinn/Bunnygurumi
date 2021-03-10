import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './product/products.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product/product.component';
import { ProductService } from './shared/product.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadComponent } from './upload/upload.component';
import { ProductControlComponent } from './product/product-control/product-control.component';
import { ProductShopComponent } from './product/product-shop/product-shop.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    NavbarComponent,
    UploadComponent,
    ProductControlComponent,
    ProductShopComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
