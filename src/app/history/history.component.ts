import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {

  constructor(private Router: Router) {
  }

  // checked = false;


  Click(link: any) {
    this.Router.navigate([link]);
  }

  ngOnInit(): void {

  }

  // changRadio() {
  //   this.checked = true
  // }

}
