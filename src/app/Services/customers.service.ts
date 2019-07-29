import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  uri = 'http://localhost:5000';

  constructor(private http: HttpClient) { }
  	getCustomers(){
  		return this.http.get(`${this.uri}/customers/`);
  	}

 	addCustomer(Id,Name,Person,telephone,location,Employees) {
		const obj = {
		  id: 0,
		  name: Name,
		  person: Person,
		  telephone: telephone,
		  location: location,
		  employees: Employees
		};
		console.log(obj);
		this.http.post(`${this.uri}/customers/add`, obj)
		    .subscribe(res => {
		    	console.log('Done');
		    	console.log(res);
		    });
	}
}
