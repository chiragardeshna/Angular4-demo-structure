import { Injectable, ViewContainerRef, ElementRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { alert } from '../constants/http';
import _ from 'lodash';

@Injectable()
export class Toaster {

  constructor (
    public toastr: ToastsManager
  ){ }

  success(message: string){
    this.toastr.custom(alert(message, 'success'), null, 
      {
        enableHTML: true,
        maxShown: 20
      }
    )
  }

  error(message: string){
    this.toastr.custom(alert(message, 'danger'), null, 
      {
        enableHTML: true,
        maxShown: 20
      }
    )
  }
}
