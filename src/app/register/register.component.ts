import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Toaster } from '../utils/toaster';
import { User } from '../dao/user';
import _ from 'lodash';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService, Toaster]
})
export class RegisterComponent implements OnInit {

  public formData: Object = {name: '', email: '', password: '', password_confirmation: ''};
  public formErrors: string[];
  public user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private toaster: Toaster
  ) { }

  ngOnInit() {

  }

  clicked(){
    this.userService.register(this.formData)
    .then(user => {
      this.toaster.success('Registration Successfull');
      this.clearErrors();
      this.clearForm();
      this.router.navigate(['/login']);
    })
    .catch(error => {
      this.formErrors = error.json().errors;
      this.toaster.error('Validation Failed!');
    });
  }

  clearForm(){
    var formData = this.formData;
    _.map(this.formData, function(value, name){
      formData[name] = '';
    })
    this.formData = formData;
  } 

  clearErrors(){
    this.formErrors = [];
  }
}
