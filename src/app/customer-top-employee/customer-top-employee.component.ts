/*app.component.ts*/
import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../js/canvasjs.min.js';
import {CustomersService} from '../Services/customers.service';
//var CanvasJS = require('./canvasjs.min');
 
@Component({
  selector: 'app-customer-top-employee',
  templateUrl: './customer-top-employee.component.html',
  styleUrls: ['./customer-top-employee.component.css']
})
 
export class CustomerTopEmployeeComponent implements OnInit {
	constructor(private cs: CustomersService) { }
	
	ngOnInit() {
		this.cs.getTopEmployeeSet().subscribe(res => {
			console.log(res);
			let dataPoints = [];

			res['data'].forEach(function(value, index, arr){
				const obj = {y: value.employee, label: value.name, color: value.color};
				dataPoints.push(obj);
			});
			
			// res['rain'].forEach(function(value, index, arr){
			// 	const obj = {y: value.employee, label: value.name, color: value.color};
			// 	dataPoints.push(obj);
		
			// })
			// res['noRain'].forEach(function(value, index, arr){
			// 	const obj = {y: value.employee, label: value.name, color: value.color};
			// 	dataPoints.push(obj);
		
			// })

			renderChart(dataPoints);

		});

		
    }
}

function renderChart(dataPoints){
	let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Top Employee"
		},
		data: [{
			type: "column",
			dataPoints: dataPoints
		}]
	});
		
	chart.render();
}