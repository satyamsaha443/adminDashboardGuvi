import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { MarketComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing-module';
import { UserComponent } from './users/user/user.component';
import { ProductComponent } from './products/product/product.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { UserService } from './user.service';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    LineGraphComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    ProductsComponent,
    MarketComponent,
    CartComponent,
    HomeComponent,
    UserComponent,
    ProductComponent,
    EditUserComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
