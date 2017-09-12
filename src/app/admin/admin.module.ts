import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// layout and routes
import { ADMIN_ROUTE_LIST } from './admin-router';
import { AuthGuard } from '../guards/auth-guard';
import { AuthService } from '../services/auth.service';

// components
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminNavbarComponent } from '../admin-layout/navbar/admin-navbar.component';


@NgModule({
  imports: [
    CommonModule,
    ADMIN_ROUTE_LIST
  ],
  declarations: [
    DashboardComponent,
    // AdminNavbarComponent
  ],
  providers: [AuthGuard, AuthService]
})
export class AdminModule { }
