import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { LocalStore } from '../utils/localstore';

import 'rxjs/add/observable/of';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public store: LocalStore,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    
    let token = this.store.get('token');
    
    if(!token) this.router.navigate(['/login']);

    return this.authService.validate({token: token})
    .then(res => 
      { 
        return true;
      }
    )
    .catch(error => 
      { 
        this.router.navigate(['/login']);
      }
    );
  }

}
