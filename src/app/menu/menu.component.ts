import { Component, OnInit } from '@angular/core';
import { Page } from '../interface/interface';
import { MenuService, SearchModel } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private sv: MenuService
  ) { }

  searchModel: SearchModel = {} as SearchModel;
  infoList: any = [];
  page = new Page();

  ngOnInit(): void {
    // this.show();
  }

  // show(): void {
  //   Object.assign(this.searchModel, )
  //   this.sv.search(this.searchModel, this.page).pipe()
  //     .subscribe((res: any) => {
  //       this.infoList = res.records;
  //     });
  // }
}


