import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { RatingComponent } from './components/rating/rating.component';
import { HomeComponent } from './views/home/home.component';
import { ShopComponent } from './views/shop/shop.component';
import { CartComponent } from './views/cart/cart.component';
import { CartRowComponent } from './components/cart-row/cart-row.component';
import { RecentProductsComponent } from './components/recent-products/recent-products.component';
import { ShopeDetailComponent } from './views/shope-detail/shope-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { CheckoutProdComponent } from './components/checkout-prod/checkout-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
    CategoryComponent,
    CategoriesComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    RatingComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
    CartRowComponent,
    RecentProductsComponent,
    ShopeDetailComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    CheckoutProdComponent,

      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
