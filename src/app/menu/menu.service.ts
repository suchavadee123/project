import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Page } from '../interface/interface';

export interface SearchModel extends Page{
  name: String,
  price: number,
}

export interface GetDetail {
  productId: number;
}

@Injectable({ providedIn: 'root' })
export class MenuService {

  private resourceUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  // search(model: SearchModel, page: Page) {
  //   return this.http.post<any>(`${this.resourceUrl}/search`, model);
  // }



}
