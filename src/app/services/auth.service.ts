import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpClient } from '../utils/http-client';
import { SERVER_URL } from '../constants/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  protected url: string;

  constructor(
    public http: HttpClient
  ){
    this.url = SERVER_URL + '/login';      
  }

  attempt(data)  {
    return this.http
    .post(this.url, data)
    .toPromise()
    .then(res => res.json().data)
    .catch(error => {
      return Promise.reject(error.message || error);
    });
  }

  validate(data){
    return this.http
    .withAuthorization()
    .post(SERVER_URL + '/validate', data)
    .toPromise()
    .then(res => res.json().data)
    .catch(error => {
      return Promise.reject(error.message || error);
    });
  }

  user(){
    return this.http
    .get(SERVER_URL + '/users/me')
    .toPromise()
    .then(res => res.json().data)
    .catch(error => {
      return Promise.reject(error.message || error);
    });
  }
}
