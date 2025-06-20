import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { providePrimeNG } from 'primeng/config';
import customeizePresetAuraTheme  from '../primenng-preset-theme'

import { NgIconsModule } from '@ng-icons/core';
import { bootstrapBox, bootstrapSpeedometer2, bootstrapChevronDown, bootstrapPieChart, bootstrapDiagram3, bootstrapCalculator, bootstrapCart3, bootstrapGraphUpArrow, bootstrapDiagram2, bootstrapFileEarmarkBarGraph, bootstrapGear, bootstrapQuestionCircle, bootstrapChevronUp,bootstrapArrowUp } from '@ng-icons/bootstrap-icons'


import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { PublicLayout } from './layout/public-layout/public-layout';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { UserLayout } from './layout/user-layout/user-layout';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { SharedModule } from "./shared/shared-module";
import { UserSidebar } from './menu/user-sidebar/user-sidebar';
import { AdminSidebar } from './menu/admin-sidebar/admin-sidebar';
import { Signup } from './pages/user/sku-forecast/signup/signup';
// import { Login } from './login/login';
// import { Signup } from './signup/signup';


@NgModule({
  declarations: [
    App,
    PublicLayout,
    AdminLayout,
    UserLayout,
    UserSidebar,
    AdminSidebar,
    Signup,
    // Login,
    // Signup,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgIconsModule.withIcons({ bootstrapBox, bootstrapSpeedometer2, bootstrapChevronDown, bootstrapPieChart, bootstrapDiagram3, bootstrapCalculator, bootstrapCart3, bootstrapGraphUpArrow, bootstrapDiagram2, bootstrapFileEarmarkBarGraph, bootstrapGear, bootstrapQuestionCircle, bootstrapChevronUp,bootstrapArrowUp })
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: customeizePresetAuraTheme,
        options: {
          darkModeSelector: '.my-app-dark',
          cssLayer: {
                name: 'primeng',
                order: 'theme, base, primeng'
            }
        }
      },
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
