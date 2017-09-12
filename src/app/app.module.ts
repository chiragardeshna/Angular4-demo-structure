import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// app components.
import { AppComponent } from './app.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { APP_ROUTE_LIST } from './login-layout/login-layout-routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Navbar } from './login-layout/navbar/navbar.component';
import { FormErrorComponent } from './directives/form-error/form-error.component';
import { AdminNavbarComponent } from './admin-layout/navbar/admin-navbar.component';

// guard.
import { RedirectGuard } from './guards/redirect-guard';

// utils
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { HttpClient } from './utils/http-client';
import { LocalStore } from './utils/localstore';
import { Toaster } from './utils/toaster';

// modules
import { AdminModule } from './admin/admin.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    LoginComponent,
    RegisterComponent,
    Navbar,
    FormErrorComponent,
    AdminLayoutComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    APP_ROUTE_LIST,
    AdminModule
  ],
  providers: [HttpClient, LocalStore, Toaster, RedirectGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
