import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../Services/customers.service';

@Component({
  selector: 'app-customer-rain-list',
  templateUrl: './customer-rain-list.component.html',
  styleUrls: ['./customer-rain-list.component.css']
})
export class CustomerRainListComponent implements OnInit {
	dataSet: any;
  constructor(private cs: CustomersService) { }

  ngOnInit() {
  	this.cs.getRainDataSet().subscribe(res => {
  		this.dataSet = res;
  		console.log(this.dataSet);
  	})
  }

}
