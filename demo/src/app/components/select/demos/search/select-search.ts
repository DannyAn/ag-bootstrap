import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-select-search',
  templateUrl: './select-search.html',
  styles  : []
})
export class NgbdSelectSearch implements OnInit {
  selectedOption;
  searchOptions;

  ngOnInit() {
    /*模拟服务器异步加载*/
    setTimeout(_ => {
      this.searchOptions = [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'tom', label: 'Tom' }
      ];
    }, 100);
  }
}

