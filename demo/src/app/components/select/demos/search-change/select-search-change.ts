import { Component, OnInit } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngbd-select-search-change',
  templateUrl: './select-search-change.html',
  styles: []
})
export class NgbdSelectSearchChange {
  selectedOption;
  searchOptions = [];

  constructor(private jsonp: Jsonp) {
  }

  searchChange(searchText) {
    const query = encodeURI(searchText);
    (
      this.jsonp.get(`https://suggest.taobao.com/sug?code=utf-8&q=${query}&callback=JSONP_CALLBACK`).pipe(map(res => res.json())) as Observable<Response>).subscribe((data: any) => {
        this.searchOptions = data.result;
      });
  }
}
