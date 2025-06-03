import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { Dashboard } from './dashboard/dashboard';
import { Supplier } from './supplier/supplier';
import { Inventory } from './inventory/inventory';
import { SkuMaster } from './sku-master/sku-master';


@NgModule({
  declarations: [
    Dashboard,
    Supplier,
    Inventory,
    SkuMaster
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
