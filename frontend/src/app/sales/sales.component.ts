import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  constructor() {}

  sales = [
    {
      oid: '123',
      date: '24-06-2020',
      items: 'Bordeaux',
      quantity: '2',
      price: '34,000',
    },
    {
      oid: '123',
      date: '24-06-2020',
      items: 'Bordeaux',
      quantity: '2',
      price: '34,000',
    },
    {
      oid: '123',
      date: '24-06-2020',
      items: 'Bordeaux',
      quantity: '2',
      price: '34,000',
    },
    {
      oid: '123',
      date: '24-06-2020',
      items: 'Bordeaux',
      quantity: '2',
      price: '34,000',
    },
    {
      oid: '123',
      date: '24-06-2020',
      items: 'Bordeaux',
      quantity: '2',
      price: '34,000',
    },
  ];

  ngOnInit(): void {}
}
