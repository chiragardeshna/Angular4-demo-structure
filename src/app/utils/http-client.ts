import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { LocalStore } from './localstore';
import _ from 'lodash';

@Injectable()
export class HttpClient{

  protected headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});

  protected options;

  constructor ( 
    public http: Http,
    public store: LocalStore
  ) {
    console.log('here in init');
  }

  withAuthorization(){
    let token = this.store.get('token');
    if(token){
      this.headers.set('Authorization', 'Bearer ' + token);
    }
    this.options = new RequestOptions({ headers: this.headers });
    return this;
  }

  get(url){
    return this.http.get(url, this.options);
  }

  post(url, data){
    console.log(this.options);
    return this.http.post(url, data, this.options);
  }
}
