import { Component } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'ngbd-select-multiple-change',
  templateUrl: './select-multiple-change.html',
  styles  : []
})
export class NgbdSelectMultipleChange {
  searchOptions;
  selectedMultipleOption = [];

  constructor(private jsonp: Jsonp) {
  }

  searchChange(searchText) {
    const query = encodeURI(searchText);
    (this.jsonp.get(`https://suggest.taobao.com/sug?code=utf-8&q=${query}&callback=JSONP_CALLBACK`).map(res => res.json()) as Observable<Response>).subscribe((data: any) => {
      this.searchOptions = data.result;
    });
  }
}
