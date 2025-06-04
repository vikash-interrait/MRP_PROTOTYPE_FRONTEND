import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgIconsModule } from '@ng-icons/core';

import { bootstrapBox,bootstrapSpeedometer2,bootstrapChevronDown,bootstrapPieChart,bootstrapDiagram3,bootstrapCalculator,bootstrapCart3,bootstrapGraphUpArrow,bootstrapDiagram2,bootstrapFileEarmarkBarGraph,bootstrapGear,bootstrapQuestionCircle,bootstrapChevronUp } from '@ng-icons/bootstrap-icons'

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { PublicLayout } from './layout/public-layout/public-layout';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { UserLayout } from './layout/user-layout/user-layout';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { SharedModule } from "./shared/shared-module";
import { UserSidebar } from './menu/user-sidebar/user-sidebar';
import { AdminSidebar } from './menu/admin-sidebar/admin-sidebar';


@NgModule({
  declarations: [
    App,
    PublicLayout,
    AdminLayout,
    UserLayout,
    UserSidebar,
    AdminSidebar,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgIconsModule.withIcons({bootstrapBox,bootstrapSpeedometer2,bootstrapChevronDown,bootstrapPieChart,bootstrapDiagram3,bootstrapCalculator,bootstrapCart3,bootstrapGraphUpArrow,bootstrapDiagram2,bootstrapFileEarmarkBarGraph,bootstrapGear,bootstrapQuestionCircle,bootstrapChevronUp})
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule { }
