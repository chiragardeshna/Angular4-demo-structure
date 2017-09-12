import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { LocalStore } from '../utils/localstore';

import 'rxjs/add/observable/of';

@Injectable()
export class RedirectGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public store: LocalStore,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    
    let token = this.store.get('token');
    console.log('redirect guard');
    if(!token) return true;

    return this.authService.validate({token: token})
    .then(res => 
      { 
        console.log(res);
        this.router.navigate(['/admin/dashboard']);
      }
    )
    .catch(error => 
      { 
        console.log(error);
        return true;
      }
    );
  }

}
