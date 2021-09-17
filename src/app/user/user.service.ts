import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
declare var liff: any;

@Injectable()
export class ApproveLoanService {
  constructor(
    private http: HttpClient,
    ) { }

  initLineLiff() {
    return new Promise((resolve, reject) => {
    //   liff.init(data => {
    //     resolve(liff.getProfile())
    //   }, err => {
    //     reject(err)
    //   })
    })
  }

  getLineProfile() {
    return new Promise((resolve, reject) => {
      // liff.getProfile(data => {
      //   resolve(data)
      // }, err => {
      //   reject(err)
      // })
    })
  }
}
