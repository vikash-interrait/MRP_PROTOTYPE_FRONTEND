import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicLayout } from './layout/public-layout/public-layout';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { UserLayout } from './layout/user-layout/user-layout';


const Public_Routes = [
  {
    path :"",
    loadChildren : ()=> import("./pages/public/public-module").then(m=> m.PublicModule)
  }
]

const Admin_Routes = [
  {
    path : "",
    loadChildren : ()=> import("./pages/admin/admin-module").then( m=> m.AdminModule)
  }
]

const User_Routes = [
  {
    path : "",
    loadChildren : ()=> import("./pages/user/user-module").then( m=> m.UserModule)
  }
]



const routes: Routes = [
  {
    path : "",
    component : PublicLayout,
    children : Public_Routes
  },
  {
    path : "admin",
    component : AdminLayout,
    children : Admin_Routes
  },
  {
    path : "user",
    component : UserLayout,
    children : User_Routes
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
