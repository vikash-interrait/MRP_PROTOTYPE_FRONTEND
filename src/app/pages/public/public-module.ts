import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './login';
import { Signup } from './signup';



@NgModule({
  declarations: [
    Login,
    Signup
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
