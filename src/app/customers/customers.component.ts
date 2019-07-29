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
	popUp: boolean = false;
	popUpMessage = '';
  constructor(private cs: CustomersService, private router: Router) { 
  }

  ngOnInit() {
  	this.popUpMessage = (history.state.data) ? history.state.data.popup : this.popUpMessage;
  	if(this.popUpMessage.length > 0){
  		this.popUp = true;
  		setTimeout(function(){ 
  			this.popUp = false;
  			console.log(this.popUp); 
  		}, 5000);
  	}

  	this.cs.getCustomers().subscribe(res => {
  		this.customers = res;
  		console.log(this.customers);
  	})
  	
  }

  Edit(company){
  	console.log('editing');
  	this.router.navigate(['/customer-add-edit'], {state: {data: company}});
  }

  Delete(company){
  	if(confirm(`Are you sure you want to delete ${company.name}?`)){
  		console.log('deleting');	
  		this.cs.delete(company).subscribe(res => {
			this.customers = res;  			
			console.log(this.customers);
			this.popUpMessage = `Successfully Deleted ${company.name}`
			this.popUp = true;
	  		setTimeout(function(){ 
	  			this.popUp = false;
	  			console.log(this.popUp); 
	  		}, 5000);
  		});
  	}
  }

}
