import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotherComponent } from './mother.component';
import {MotherRoutingModule} from './mother-routing.module';



@NgModule({
  declarations: [MotherComponent],
  imports: [
    CommonModule,
    MotherRoutingModule
  ]
})
export class MotherModule { }
