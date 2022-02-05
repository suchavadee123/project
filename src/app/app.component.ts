import { Component, VERSION, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import liff from '@line/liff';

type UnPromise<T> = T extends Promise<infer X> ? X : T;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // os: ReturnType<typeof liff.getOS>;
  // profile!: UnPromise<ReturnType<typeof liff.getProfile>>;
  ngOnInit(): void {
    // liff.init({ liffId: '1656199226-JGye8wkD' }).then(() => {
    //   this.os = liff.getOS();
    //   if (liff.isLoggedIn()) {
    //     liff.getProfile().then(profile => {
    //       this.profile = profile;
    //     }).catch(console.error);
    //   } else {
    //     liff.login()
    //   }
    // }).catch(console.error);
  }

}
