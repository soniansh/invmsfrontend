import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { GenericListFilterModule } from 'generic-list-filter';
import 'hammerjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { NgChartsModule } from 'ng2-charts';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
// import { HeaderComponent } from './components/header/header.component';
// import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { ProductListComponent } from './components/product/product-list.component';
// import { registrationComponent } from './components/registration/registration.component';

import{ HeaderComponent,HomeComponent,LoginComponent,registrationComponent,
  FooterComponent,
  ProductListComponent,
  AddProductComponent
} from './components'
import { GroupbycategoryComponent } from './components/groupbycategory/groupbycategory.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { ProductService } from './services/product.service';
import { LoginserviceService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ForbiddenComponent,
    registrationComponent,
    FooterComponent,
    ProductListComponent,
    AddProductComponent,
    GroupbycategoryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    GenericListFilterModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    OrderModule,
    NgChartsModule,
    ModalModule.forRoot()
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    LoginserviceService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
