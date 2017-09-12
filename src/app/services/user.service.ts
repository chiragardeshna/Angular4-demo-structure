import { Injectable } from '@angular/core';
import { HttpClient } from '../utils/http-client';
import { SERVER_URL } from '../constants/http';
import { User } from '../dao/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  public userUrl: string;

  constructor(
    public http: HttpClient
  ){
    this.userUrl = SERVER_URL + '/users';      
  }

  register(data): Promise<User|void> {
    
    return this.http
    .post(this.userUrl, data)
    .toPromise()
    .then(res => res.json().data as User)
    .catch(error => {
      return Promise.reject(error.message || error)
    });
    
  }
}
