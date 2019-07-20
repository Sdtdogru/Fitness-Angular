import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersaveComponent} from './usersave.component';


const routes: Routes = [
  {
    path: '',
    component: UsersaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersaveRoutingModule { }
