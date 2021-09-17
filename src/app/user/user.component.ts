import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  constructor( ) {
    this.initLineLiff();

  }

  async initLineLiff() {
    try {
      // this.data = await this.approveLoanService.initLineLiff();
      // this.userProfile = await liff.getProfile();
      // this.userId = this.userProfile.userId;
    } catch (err) {
      alert(err)
    }
  }

  async ngOnInit() {
    await this.initLineLiff();
    // await
    // liff.init({ liffId: '1656199226-JGye8wkD' });
  }

}
