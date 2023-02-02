import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Category: string;
  term: string;
  AmortizationPeriod: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Category: 'Number of payments', term: '60', AmortizationPeriod: '300' },
  {
    Category: 'Mortgage Payment',
    term: '$581.23',
    AmortizationPeriod: '$581.3',
  },
  { Category: 'Prepayment', term: '$0.00', AmortizationPeriod: '$0.00' },
  {
    Category: 'Principal Payment',
    term: '11,498.50',
    AmortizationPeriod: '100,000.00',
  },
  {
    Category: 'Interest Payment',
    term: '23,233.44',
    AmortizationPeriod: '74,094.50',
  },
  {
    Category: 'Total cost',
    term: '34,343.44',
    AmortizationPeriod: '174,430.43',
  },
];
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['Category', 'term', 'AmortizationPeriod'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
