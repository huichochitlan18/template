import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { FormGroup } from '@angular/forms';

const API = environment.api;
@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _http = inject(HttpClient)
  constructor() { }

  login(formGroup: FormGroup) {
    // console.log(formGroup.value);
    this._http.post(`${API}auth/login`, {
      username: formGroup.get('user')?.value,
      password: formGroup.get('password')?.value
    }).subscribe(x => {
      console.log(x);
    })
  }
}
