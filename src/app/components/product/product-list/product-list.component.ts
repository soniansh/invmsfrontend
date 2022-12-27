import { Component, OnInit,EventEmitter, Input,  Output, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { MatPaginator } from '@angular/material/paginator'; import { startWith, tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

interface Catg {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})



// interface Loc{ 
//   value: string;
//   viewValue: string;
// }

export class ProductListComponent implements OnInit {

  showLoadingIndicator ;
  p: any;
  searchText: any;
  products: Product[] = [];

 
  @Output() onFilterChange = new EventEmitter(); 
  filterList = {
      productCategory: ['Fashion','Electronics','Books','Sports','Toys'],
      productSize: ['Small', 'Medium','Large'],
      productTag : ['latest arrival', 'best seller']
  };

  @ViewChild('MatPaginator') paginator: MatPaginator;
   

  constructor( private modalService: BsModalService,
      private router: Router, private route: ActivatedRoute,private productService: ProductService,) {
      
  }


  ngOnInit(): void {
      this.getProducts();
      console.log(this.products);    

  } 


  productId: number;
  product: Product = new Product();


  Catgs: Catg[] = [{ value: 'Fashion', viewValue: 'Fashion' },
  { value: 'Electronics', viewValue: 'Electronics' },
  { value: 'Books', viewValue: 'Books' },
  { value: 'Sports', viewValue: 'Sports' },
  { value: 'Toys', viewValue: 'Toys' }];


// Locs:Loc[]=[{value:'Pune',viewValue:'Pune'},
// {value:'Mumbai',viewValue:'Mumbai'},
// {value:'Bengaluru',viewValue:'Bengaluru'},  
// {value:'Chennai',viewValue:'Chennai'},
// {value:'Hyderabad',viewValue:'Hyderabad'},
// {value:'Kolkata',viewValue:'Kolkata'}, 
// {value:'Noida',viewValue:'Noida'},        
              //  ];  

  modalRef: BsModalRef;

 openModalUpdate(template: TemplateRef<any>,productId: number) {
    this.modalRef = this.modalService.show(template,{ class: 'card-image' });
    this.modalRef.setClass('modal-lg');
    this.getProductById(productId);

 }

  private getProductById(productId): void {
      this.productService.getProductById(productId).subscribe(data => {
          this.product = data;
          console.log(this.product)
        }, error => console.log(error));

  }

  onSubmitUpdate(){
      this.productService.updateProduct(this.productId, this.product).subscribe( data =>{
        this.goToProductsList();
        this.router.navigate(['/product']);
      }
      , error => console.log(error));
    }
  
    goToProductsList(){
      // this.router.navigate(['/employees']);
      this.getProducts();
    }


  private getProducts(): void {
      // this.showLoadingIndicator = false;
      this.productService.getProductsList().subscribe(data => {
          // this.showLoadingIndicator = true;
          this.products = data;
          this.copyData = this.products;
      });
  }




  idToBeDeleted ;
  openModalDelete(templateB: TemplateRef<any>,productId) {
      this.modalRef = this.modalService.show(templateB,{backdrop:'static'});
      
      // this.modalRef.setClass('modal-lg');
      // this.productId = this.route.snapshot.params['productId'];
      // this.deleteProduct(empId);
      this.idToBeDeleted = productId;

   }
   confirm(): void {
      this.deleteProduct();
      this.modalRef.hide();
    }
    
   decline(): void {
      this.modalRef.hide();
    }

    deleteProduct() {
      this.productService.deleteProduct( this.idToBeDeleted).subscribe(data => {
          console.log(data);
          this.getProducts();
      })
  }
  


  copyData = this.products;

 
  productCategory: any;
  productSize: any;
  productTag: any;

  filterChange(appliedfilters) {
      console.log(appliedfilters);
      this.products = this.copyData;

      console.log(this.products); this.productCategory = appliedfilters.appliedFilterValues.poductCategory;
      this.productSize = appliedfilters.appliedFilterValues.productSize;
      this.productTag = appliedfilters.appliedFilterValues.productTag;
      if (this.productCategory) {
          this.products = this.products.filter(item => item.productCategory === this.productCategory);
      }
      if (this.productSize) {
          this.products = this.products.filter(item => item.productSize === this.productSize);
      }
      if (this.productTag) {
          this.products = this.products.filter(item => item.productTag === this.productTag);
      } console.log(this.products);
  }




  key:number=0;
  reverse:boolean=false;

  sort(key){
 this.key=this.key;
 this.reverse=!this.reverse;
  }

  // setOrder(value: string) {
  //     if (this.order === value) {
  //       this.reverse = !this.reverse;
  //     }
  
  //     this.order = value;
  //   }



}
