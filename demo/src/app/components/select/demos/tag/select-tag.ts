import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-select-tag',
  templateUrl: './select-tag.html',
  styles  : []
})
export class NgbdSelectTag implements OnInit {
  searchOptions = [
    { value: 'jack', label: '杰克' },
    { value: 'lucy', label: '露西' },
    { value: 'tom', label: '汤姆' }
  ];
  selectedMultipleOption = [ this.searchOptions[ 0 ] ];

  ngOnInit() {
    setTimeout(_ => {
      this.selectedMultipleOption = [];
    }, 2000)
  }
}

