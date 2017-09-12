import { RouterModule } from '@angular/router';

// layout and components.
import { AdminLayoutComponent } from '../admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// guard.
import { AuthGuard } from '../guards/auth-guard';

export const ADMIN_ROUTE_LIST = RouterModule.forChild([
    { 
        path: 'admin', 
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent }
        ]
    }
]);