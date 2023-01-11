import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit {
  criterisStorage=[];
  valoracionsStorage=[];
  notesStorage=[];
  constructor() {}
  ngOnInit(): void {
  }

  recuperarCriteris(){
    this.criterisStorage=JSON.parse(localStorage.getItem("criteris")!);
    console.log(this.criterisStorage);
    this.valoracionsStorage=JSON.parse(localStorage.getItem("valoracions")!);
    console.log(this.valoracionsStorage);
    this.notesStorage=JSON.parse(localStorage.getItem("notes")!);
    console.log(this.notesStorage);
  }

}

