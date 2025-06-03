import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHeader } from './admin-header/admin-header';



@NgModule({
  declarations: [
    AdminHeader
  ],
  imports: [
    CommonModule
  ],
  exports : [
    AdminHeader
  ]
})
export class SharedModule { }
