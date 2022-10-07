import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select2',
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.css']
})
export class Select2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cars = [
    { id: 1, name: "BMW Hyundai" },
    { id: 2, name: "Kia Tata" },
    { id: 3, name: "Volkswagen Ford" },
    { id: 4, name: "Renault Audi" },
    { id: 5, name: "Mercedes Benz Skoda" },
  ];

  selected = [{ id: 3, name: "Volkswagen Ford" }];
  seleccionados(){
    console.log(this.selected);

  }
}
