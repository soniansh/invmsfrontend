import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { registrationComponent } from './components/registration/registration.component';
import { GroupbycategoryComponent } from './components/groupbycategory/groupbycategory.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { RouteGuardService } from './services/route-guard.service';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'register', component: registrationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductListComponent,canActivate:[RouteGuardService]},
  {path: 'addproduct', component: AddProductComponent,canActivate:[RouteGuardService]},
  {path: 'groupcatg', component: GroupbycategoryComponent,canActivate:[RouteGuardService]},
  { path: 'forbidden', component: ForbiddenComponent }
  // {path: '', redirectTo: 'home', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
