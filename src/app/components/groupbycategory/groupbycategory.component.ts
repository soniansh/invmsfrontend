import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { ProductService } from 'src/app/services/product.service';



export class Groupcatg {
  constructor(
    public productCategory: string,
    public productSold: number

  ) {

  }
}


@Component({
  selector: 'app-groupbycategory',
  templateUrl: './groupbycategory.component.html',
  styleUrls: ['./groupbycategory.component.css']
})
export class GroupbycategoryComponent implements OnInit {
  groupcatgs: Groupcatg[]
  result: any;
  productCategory: any
  productSold: any

  chart: any = [];

  constructor(private productService: ProductService,
    private router: Router) { Chart.register(...registerables); }



  ngOnInit(): void {
    this.groupcatg();



    this.productService.retrivegroupcatg().subscribe(
      (      res: any[]) => {

        // this.result = res;
        this.productCategory = res.map((res: { productCategory: any; }) => res.productCategory);
        this.productSold = res.map((res: { productSold: any; }) => res.productSold);
        // let empVaccination = res['list'].map(res => res.main.empVaccination)
        console.log(res)
        console.log(this.productSold);
        console.log(this.productSold);

        const myChart = new Chart("myChart", {
          type: 'bar',
          data: {
            labels: this.productCategory,
            datasets: [{
              label: 'Number of Product Sold in Category',
              data: this.productSold,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 2
            }]
          },
          options: {
            indexAxis: 'x',
            scales: {
              x: {
                grid: {
                  display: false
                }
              },
              y:
              {
                grid: {
                  display: false
                }
              }
            },
            plugins: {
              legend: {
                labels: {

                  font: {
                    size: 16
                  }
                },
                
              }
            },
            layout: {
              padding: 3
            }

          }

        });
      }
    )

  }




  groupcatg() {
    this.productService.retrivegroupcatg().subscribe(
      (      response: Groupcatg[]) => {
        // console.log(response);
        this.groupcatgs = response;

      }
    )
  }






}

