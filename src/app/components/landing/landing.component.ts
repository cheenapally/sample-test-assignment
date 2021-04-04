import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  appName: string;

  emplyeeHeader: string[];
  employeeData: Object[];
  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'}
];
defaultColDef: Object;
rowData = [];
  constructor(private route: ActivatedRoute) { }
   
  ngOnInit(): void {
   this.appName = this.route.snapshot.paramMap.get('id');
   this.emplyeeHeader = [
     'Id', 'First Name', 'Last Name', 'Address', 'Phone Number'
   ];

   this.employeeData = [
     {id: '1001', firstName: 'Kiran', lastName: 'Kumar', address: 'Florida, USA', phoneNumber: '+1 1423434445'},
     {id: '1002', firstName: 'Jhon', lastName: 'Mazzu', address: 'Columbus, USA', phoneNumber: '+1 14234678445'},
     {id: '1003', firstName: 'Jerry', lastName: 'Cruz', address: 'Texas, USA', phoneNumber: '+1 1423438945'},
     {id: '1004', firstName: 'Akash', lastName: 'Bodapally', address: 'Florida, USA', phoneNumber: '+1 1423344445'},
     {id: '1005', firstName: 'James', lastName: 'Maru', address: 'Florida, USA', phoneNumber: '+1 6423434445'},
    ];

   this.rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000},
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000},
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000}
];

this.defaultColDef = {
  flex: 1,
  minWidth: 150,
  filter: true,
  sortable: true
};

}

}
