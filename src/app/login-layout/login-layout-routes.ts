import { Routes, RouterModule } from '@angular/router';

import { LoginLayoutComponent } from './login-layout.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RedirectGuard } from '../guards/redirect-guard';


export const APP_ROUTE_LIST =  RouterModule.forRoot([
    { 
        path: '', 
        component: LoginLayoutComponent,
        canActivate: [RedirectGuard],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }     
        ] 
    },
]);