import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersaveComponent } from './usersave.component';
import {UsersaveRoutingModule} from './usersave-routing.module';



@NgModule({
  declarations: [UsersaveComponent],
  imports: [
    CommonModule,
    UsersaveRoutingModule
  ]
})
export class UsersaveModule { }
