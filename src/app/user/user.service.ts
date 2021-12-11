import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
declare var liff: any;

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient,
  ) { }

  initLineLiff() {
    return new Promise((resolve, reject) => {
      liff.init((_data: any) => {
        resolve(liff.getProfile())
      }, (err: any) => {
        reject(err)
      })
    })
  }

  getLineProfile() {
    return new Promise((resolve, reject) => {
      liff.getProfile((data: unknown) => {
        resolve(data)
      }, (err: any) => {
        reject(err)
      })
    })
  }
}
