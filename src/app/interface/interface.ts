export class Page {
    pageNumber = 1;
    pageSize = 10;
    sorts: Sort[] | undefined;
  static sorts: any;
}
export class Sort {
  colId: String = '';
  sort: String = '';
}


