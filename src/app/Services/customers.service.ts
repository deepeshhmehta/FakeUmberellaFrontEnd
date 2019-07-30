import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  uri = 'http://localhost:5000';
  constructor(private http: HttpClient, private router: Router) { }
  	getCustomers(){
  		return this.http.get(`${this.uri}/customers/`);
  	}

  	getRainDataSet(){
  		return this.http.get(`${this.uri}/customers/rainprediction`);	
  	}

  	getTopEmployeeSet(){
  		return this.http.get(`${this.uri}/customers/topfour`);	
  	}

 	addEditCustomer(company) {
		const customer = {
		  id: company.id,
		  name: company.name,
		  person: company.person,
		  telephone: company.telephone,
		  location: company.location,
		  employee: company.employee
		};
		console.log(customer);
		if(customer.id === 0){
			this.http.post(`${this.uri}/customers`, customer)
		    .subscribe(res => {
		    	console.log('Done');
		    	this.router.navigate(['/customers'], {state: {data: {popup: `Successfully Added ${customer.name}`}}});
		    });	
		}else{
			this.http.put(`${this.uri}/customers`, customer)
		    .subscribe(res => {
		    	console.log('Done');
		    	this.router.navigate(['/customers'], {state: {data: {popup: `Successfully Updated ${customer.name}`}}});
		    });
		}
		
	}

	delete(customer){
		return this.http.delete(`${this.uri}/customers/${customer.id}`);
		// .subscribe(res => {
		// 	console.log('Done');
		//     	this.router.navigate(['/customers'], {state: {data: {popup: `Successfully Deleted ${customer.name}`}}});
		// });
	}
}
