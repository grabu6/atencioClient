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
  agafarValorMaxim(){
    const maxValor = Math.max.apply(null, this.notesStorage);
    console.log(maxValor);
  }
  suma=0;
  ferMitjana(){
    for(let i=0;i<this.notesStorage.length;i++){
      this.notesStorage=JSON.parse(localStorage.getItem("notes")!);
      let numerosInt=parseInt(this.notesStorage[i]);
      this.suma+=numerosInt;
    }
    console.log(this.suma);
    let total=this.suma/this.notesStorage.length;
    console.log(total);
    let totalFinal=total.toString();
    document.getElementById("mitjana")!.innerHTML=totalFinal;
  }
}

