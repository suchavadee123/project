import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private Router : Router) { }

  ngOnInit(): void {
  }

  Click(link: any) {
    this.Router.navigate([link]);
  }

}
