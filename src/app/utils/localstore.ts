import { Injectable } from '@angular/core';

@Injectable()
export class LocalStore {

    set(name: string, object: any){
        localStorage.setItem(name, object);            
    }

    get(name: string): any{
        return localStorage.getItem(name);            
    }

    remove(name: string) {
        localStorage.removeItem(name);
    }

    clear() {
        localStorage.clear();
    }
}