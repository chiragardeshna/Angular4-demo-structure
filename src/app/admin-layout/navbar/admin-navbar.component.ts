import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../dao/user';
import { AuthService } from '../../services/auth.service';
import { LocalStore } from '../../utils/localstore';
import { Toaster } from '../../utils/toaster';

@Component({
    selector: 'admin-navbar',
    templateUrl: './navbar.component.html'
})
export class AdminNavbarComponent implements OnInit{

    protected user: User;

    constructor(
        public authService: AuthService,
        public store: LocalStore,
        private router: Router,
        private toaster: Toaster
    ){}

    ngOnInit(){
        this.authService.user()
        .then(data => this.user = data.user)
        .catch(error => { console.log(error); });
    }

    logout(){
        this.store.clear();
        this.toaster.success('You have been successfully logged out!');
        this.router.navigate(['/login']);            
    }
}