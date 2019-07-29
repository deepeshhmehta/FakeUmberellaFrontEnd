import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-add-edit',
  templateUrl: './customer-add-edit.component.html',
  styleUrls: ['./customer-add-edit.component.css']
})
export class CustomerAddEditComponent implements OnInit {
	company = new Customer();
	angForm: FormGroup;
	constructor(private fb: FormBuilder) { 
		this.createForm();
	}

	createForm(){
		this.angForm = this.fb.group({
			name: [this.company.name || '', Validators.required ],
			employees: [this.company.employees, Validators.min(1) ],
			location: [this.company.location, Validators.required ],
			person: [this.company.person, Validators.required ],
			telephone: [this.company.telephone, Validators.required ],
			id: [this.company.id],
		});
	}

	ngOnInit() {
		this.company = history.state.data || this.company;
		this.angForm.setValue(this.company);
	}

	addUpdateCustomer(){
		console.log(this.angForm.value);
	}

}
