import { MenuComponent } from './menu.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {

  constructor( private  router: Router) {

   }

  ngOnInit(): void {

  }

  Click(link: any){
    this.router.navigate([link]);
  }
  // ['/user']
  // link(){

  // }





}
