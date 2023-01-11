import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
    criteriForm!: FormGroup;
    criteris:string []=[];
    constructor(private fb:FormBuilder){
      
    }
    ngOnInit(): void {
      this.criteriForm= this.fb.group({
        nom:["",[
          Validators.required,
          Validators.maxLength(100)
        ]],
      })
    }
    afegirCriteri(){
      this.criteris.push(this.criteriForm.get('nom')?.value);
      console.log(this.criteriForm.get('nom')?.value);
      this.criteriForm.patchValue({
        nom: ''
      })
      localStorage.setItem('criteris',JSON.stringify(this.criteris));
    }
  }
     
  