import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private Router : Router) { }

  ngOnInit(): void {
  }

  Click(link: any) {
    this.Router.navigate([link]);
  }

}
