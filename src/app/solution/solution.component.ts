import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['id', 'date', 'quantity', 'amount','total'];
  dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  id: number;
  date: string;
  quantity: number;
  amount: number;
  total:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, date:'2019-04-23',quantity:2,amount:500,total:1000},
  {id: 2, date:'2019-04-24',quantity:5,amount:100,total:600},
  {id: 3, date:'2019-04-25',quantity:3,amount:300,total:900},
  {id: 4, date:'2019-04-26',quantity:6,amount:20,total:1200},
  {id: 5, date:'2019-04-27',quantity:1,amount:500,total:500},
  {id: 6, date:'2019-04-28',quantity:1,amount:600,total:600},
  {id: 7, date:'2019-04-29',quantity:2,amount:700,total:1400},
  ];
