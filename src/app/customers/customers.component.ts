import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../Services/customers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
	customers: any;
  constructor(private cs: CustomersService, private router: Router) { 
  }

  ngOnInit() {
  	this.cs.getCustomers().subscribe(res => {
  		this.customers = res;
  		console.log(this.customers);
  	})
  	
  }

  Edit(company){
  	console.log('editing');
  	this.router.navigate(['/customer-add-edit'], {state: {data: company}});
  }

}
