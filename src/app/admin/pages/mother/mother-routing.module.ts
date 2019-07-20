import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MotherComponent} from './mother.component';



const routes: Routes = [
  {
    path: '',
    component: MotherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotherRoutingModule { }
