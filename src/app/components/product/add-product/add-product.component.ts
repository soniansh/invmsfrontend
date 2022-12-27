import { Component, OnInit } from '@angular/core';
// import { Product } from '../models/product';
// import { ProductService } from '../Product.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';



interface Catg {
  value: string;
  viewValue: string;
}

// interface Loc{ 
//   value: string;
//   viewValue: string;
// }




@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {



  alert: boolean = false




  product: Product = new Product();

  Catgs: Catg[] = [{ value: 'Fashion', viewValue: 'Fashion' },
                  { value: 'Electronics', viewValue: 'Electronics' },
                  { value: 'Books', viewValue: 'Books' },
                  { value: 'Sports', viewValue: 'Sports' },
                  { value: 'Toys', viewValue: 'Toys' }
                
                ];

  // Locs:Loc[]=[{value:'Pune',viewValue:'Pune'},
  //              {value:'Mumbai',viewValue:'Mumbai'},
  //             {value:'Bengaluru',viewValue:'Bengaluru'},  
  //           {value:'Chennai',viewValue:'Chennai'},
  //           {value:'Hyderabad',viewValue:'Hyderabad'},
  //           {value:'Kolkata',viewValue:'Kolkata'}, 
  //           {value:'Noida',viewValue:'Noida'},        
  //                              ];  
                               
                               

  constructor(private productService: ProductService,
    private router: Router) { }





  ngOnInit(): void {
  }



  // public existingProducts = [
  //   'existingProduct@gmail.com',
  //   'jessidevs@testEmail.com',
  // ];



  public Product = new FormGroup({
    // productId: new FormControl('', [Validators.required,
    // Validators.minLength(1),
    // Validators.maxLength(3)]),
    productName: new FormControl('', Validators.required),
    productTag: new FormControl('', Validators.required),
    productSize: new FormControl('',  Validators.required),
    productImageUrl: new FormControl('', Validators.required),
    productPrice: new FormControl(null, Validators.required),
    productDescription: new FormControl('', Validators.required),
    productCategory: new  FormControl(null, Validators.required),
  })

  // get productId() {
  //   return this.Product.get('productId');
  // }

  get productName() {
    return this.Product.get('productName');
  }

  get productTag() {
    return this.Product.get('productTag');
  }

  get productSize() {
    return this.Product.get('productSize');
  }

  get productImageUrl() {
    return this.Product.get('productImageUrl');
  }

  get productPrice() {
    return this.Product.get('productPrice');
  }

  get productDescription() {
    return this.Product.get('productDescription');
  }

  get productCategory() {
    return this.Product.get('productCategory');
  }

  



  // existingProduct(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } => {
  //     if (!control.value) {
  //       return null;
  //     }



  //     return !this.existingProducts.includes(control.value)
  //       ? null
  //       : { existingProduct: true };
  //   };
  // }




  saveProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data);
      this.router.navigate(['/product'])
    },
      error => console.log(error));
  }

  
  goToProductList() {
    this.router.navigate(['/product']);
  }

  onSubmit() {
    // console.log(this.product);
    this.saveProduct();
    this.alert = true
    // this.goToProductList();
    // this.Product.reset();
  }

  closeAlert() {
    this.alert = false
  }



}