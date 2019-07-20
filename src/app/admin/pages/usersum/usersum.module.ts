import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersumComponent } from './usersum.component';
import {UsersumRoutingModule} from './usersum-routing.module';



@NgModule({
  declarations: [UsersumComponent],
  imports: [
    CommonModule,
    UsersumRoutingModule
  ]
})
export class UsersumModule { }
