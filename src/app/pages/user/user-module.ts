import { NgModule } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Tag } from 'primeng/tag';

import { NgIconsModule } from '@ng-icons/core';
import { bootstrapDownload } from '@ng-icons/bootstrap-icons'

import { Dashboard } from './dashboard/dashboard';
import { Inventory } from './inventory/inventory';
import { SkuMaster } from './sku-master/sku-master';
import { Bom } from './bom/bom';
import { SuppilerMaster } from './suppiler-master/suppiler-master';
import { Mrp } from './mrp/mrp';
import { Procurement } from './procurement/procurement';
import { SkuForecast } from './sku-forecast/sku-forecast';
import { ComponentForecast } from './component-forecast/component-forecast';
import { RmForecast } from './rm-forecast/rm-forecast';
import { Reports } from './reports/reports';
import { Error404 } from './error404/error404';


@NgModule({
  declarations: [
    Dashboard,
    Inventory,
    SkuMaster,
    Bom,
    SuppilerMaster,
    Mrp,
    Procurement,
    SkuForecast,
    ComponentForecast,
    RmForecast,
    Reports,
    Error404
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    TableModule,
    ButtonModule,
    DialogModule,
    Tag,
    SlicePipe,
    NgIconsModule.withIcons({ bootstrapDownload })

  ]
})
export class UserModule { }
