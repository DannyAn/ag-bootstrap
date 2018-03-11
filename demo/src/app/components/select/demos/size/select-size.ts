import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-select-size',
  templateUrl: './select-size.html',
  styles  : []
})
export class NgbdSelectSize implements OnInit {
  size = 'default';
  options = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'disabled', label: 'Disabled', disabled: true },
  ];
  single = 'lucy';
  multiple = [ 'lucy' ];
  tag = [ 'lucy' ];

  constructor() {
  }

  ngOnInit() {
  }
}

