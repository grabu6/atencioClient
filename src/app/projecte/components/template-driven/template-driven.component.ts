import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit{
    criteriForm!: FormGroup;
    valoracions:any []=[];
    descripcions:any []=[];
    notes:any[]=[];
    constructor(private fb:FormBuilder){

    }
    ngOnInit(): void {
      this.criteriForm= this.fb.group({
        valoracio:["",[
          Validators.required,
          Validators.maxLength(100)
        ]],
        descripcio:["",[
          Validators.required,
          Validators.maxLength(300)
        ]],
        nota:new FormControl('')
      })
    }
    afegirValoracio(){
      this.valoracions.push(this.criteriForm.get('valoracio')?.value);
      console.log(this.valoracions);
      this.criteriForm.patchValue({
        valoracio: ''
    })
      this.notes.push(this.criteriForm.get('nota')?.value);
      console.log(this.notes);
      this.criteriForm.patchValue({
        nota: ''
  })
      this.descripcions.push(this.criteriForm.get('descripcio')?.value);
      console.log(this.descripcions);
      this.criteriForm.patchValue({
        descripcio: ''
    })
    localStorage.setItem('valoracions',JSON.stringify(this.valoracions));
    localStorage.setItem('notes',JSON.stringify(this.notes));
  }
}


     
  