import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent as criteriTD} from './projecte/components/template-driven/template-driven.component';
import { ReactiveFormsComponent as criteriRF} from './projecte/components/reactive-forms/reactive-forms.component';
import { RubricaComponent as rubrica} from './projecte/components/rubrica/rubrica.component';


const routes: Routes = [
  {path:'valoracio', component: criteriTD},
  {path: 'criteri',component:criteriRF},
  {path:'rubrica', component:rubrica}
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
