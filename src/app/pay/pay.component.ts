import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';


@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor(private Router : Router) { }

  ngOnInit(): void {
  }

  Click(link: any) {
    this.Router.navigate([link]);
  }

}
