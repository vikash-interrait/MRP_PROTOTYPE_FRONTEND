import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Dashboard } from './dashboard/dashboard';
import { SkuMaster } from './sku-master/sku-master';
import { Bom } from './bom/bom';
import { SuppilerMaster } from './suppiler-master/suppiler-master';
import { Inventory } from './inventory/inventory';
import { Mrp } from './mrp/mrp';
import { Procurement } from './procurement/procurement';
import { SkuForecast } from './sku-forecast/sku-forecast';
import { ComponentForecast } from './component-forecast/component-forecast';
import { RmForecast } from './rm-forecast/rm-forecast';
import { Reports } from './reports/reports';
import { Error404 } from './error404/error404';

const routes: Routes = [
  { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  {
    path: 'masterdata',
    children: [
      { path: 'sku', component: SkuMaster },
      { path: 'bom', component: Bom },
      { path: 'supplier', component: SuppilerMaster }
    ]
  },
  { path: 'inventory', component: Inventory },
  { path: 'mrp', component : Mrp},
  { path : 'procurement', component : Procurement},
  { 
    path : 'forecast',
    children : [
      {path : 'sku', component : SkuForecast},
      { path : 'component', component : ComponentForecast},
      {path : 'rm', component : RmForecast}
    ]
  },
  { path : 'reports',component : Reports},
  {
    path : "**", component : Error404
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
