import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-select-multiple',
  templateUrl: './select-multiple.html',
  styles  : []
})
export class NgbdSelectMultiple implements OnInit {
  searchOptions;
  selectedMultipleOption;

  ngOnInit() {
    /*模拟服务器异步加载*/
    this.selectedMultipleOption = [ 'tom', 'jack' ];
    setTimeout(_ => {
      this.searchOptions = [
        { value: 'jack', label: '杰克' },
        { value: 'lucy', label: '露西' },
        { value: 'tom', label: '汤姆' }
      ];
    }, 300);
    setTimeout(_ => {
      this.selectedMultipleOption = [ 'tom' ];
    }, 1000);
  }
}

