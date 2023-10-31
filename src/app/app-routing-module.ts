import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './users/user/user.component';
import { ProductComponent } from './products/product/product.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const appRoutes : Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
        { path: ':id' , component: UserComponent},
        { path: 'edit/:id', component: EditUserComponent }
    ] },
    { path: 'products', component: ProductsComponent, children: [
        { path: ':id' , component: ProductComponent},
        { path: 'edit/:id', component: EditProductComponent }
    ] },
    // { path: 'market' },
    // { path: 'cart' }
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}