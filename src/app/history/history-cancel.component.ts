import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history-cancel.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryCancelComponent implements OnInit {

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

