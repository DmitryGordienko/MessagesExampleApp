import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    constructor() { }


    get(name: string): any {
        let stringValue = localStorage.getItem(name);
        return stringValue ? JSON.parse(stringValue) : stringValue;
    }
    set(name: string, value: any): void {
        if (value != null) {
            let stringValue = JSON.stringify(value);
            localStorage.setItem(name, stringValue);
        }
        else {
            localStorage.removeItem(name);
        }
    }
    remove(name: string): void {
        localStorage.removeItem(name);
    }
}
