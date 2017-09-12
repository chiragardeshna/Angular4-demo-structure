import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LocalStore } from '../utils/localstore';
import { Toaster } from '../utils/toaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  protected formData: Object = {email: '', password: ''};

  constructor(
    public authService: AuthService,
    public store: LocalStore,
    public toaster: Toaster,
    private router: Router
  ) { }

  ngOnInit() {

  }

  login() {
    this.authService.attempt(this.formData)
    .then(res => {
      let token =  res['token'];
      this.store.remove('token');
      this.store.set('token', token);
      this.toaster.success('Login is successfull');
      this.router.navigate(['/admin/dashboard']);
    })
    .catch(error => { 
      this.toaster.error('Invalid Credentials.');
    });      
  }

}
