import { liff } from '@line/liff';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: String = '';

  ngOnInit(): void {
    // liff.init
    //   ({
    //     liffId: "1656199226-JGye8wkD" // Use own liffId
    //   })
    //   .then(() => {
    //     const idToken = liff.getIDToken();
    //     console.log(idToken); // print raw idToken object
    //   });

    liff.init
    if (!liff.isLoggedIn() && !liff.isInClient()) {
      window.alert('To get an access token, you need to be logged in. Tap the "login" button below and try again.');
    } else {
      const accessToken = liff.getAccessToken();
      console.log(accessToken);
    }
    const idToken = liff.getIDToken();
    console.log(idToken); // print raw idToken object
  }

  show(): void {

    liff.getProfile().then(profile => {
      this.name = profile.displayName
      console.log(this.name)
    })
      .catch((err) => {
        console.log('error', err);
      });
  }



}
