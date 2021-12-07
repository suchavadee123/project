import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayName : String = '' ;

  ngOnInit() {
    liff.init({ liffId: '1656199226-JGye8wkD' });
  }

  showprofile(){
  }


}
