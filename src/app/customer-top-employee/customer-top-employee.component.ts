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
			let greenDataPoints = [];
			let redDataPoints = [];
			let x = 0;
			res['rain'].forEach(function(value, index, arr){
				const obj = {y: value.employee, label: value.name, x: x};
				greenDataPoints.push(obj);
				x++;
			})
			res['noRain'].forEach(function(value, index, arr){
				const obj = {y: value.employee, label: value.name, x: x};
				redDataPoints.push(obj);
				x++;
			})

			console.log(greenDataPoints);
			console.log(redDataPoints);

			renderChart(redDataPoints,greenDataPoints);

		});
		// console.log(this.dataSet);
		// let redDataPoints = [];
		// dataSet['noRain'].forEach(function(value,index,arr){
		// 	const obj = {y: value.employee, label: value.name};
		// 	redDataPoints.push(obj);
		// })
		// let greenDataPoints = [];
		// dataSet['rain'].forEach(function(value,index,arr){
		// 	const obj = {y: value.employee, label: value.name};
		// 	greenDataPoints.push(obj);
		// })

		
    }
}

function renderChart(redDataPoints,greenDataPoints){
	let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Top Employee"
		},
		data: [{
			type: "column",
			color: "red",
			dataPoints: redDataPoints
		},{
			type: "column",
			color: "green",
			dataPoints: greenDataPoints
		}]
	});
		
	chart.render();
}