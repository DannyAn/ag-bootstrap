import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-select-basic',
  templateUrl: './select-basic.html',
  styles  : []
})
export class NgbdSelectBasic implements OnInit {
  options = [];
  selectedOption;

  ngOnInit() {
    /*模拟服务器异步加载*/
    setTimeout(_ => {
      this.options = [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'disabled', label: 'Disabled', disabled: true }
      ];
      this.selectedOption = this.options[ 0 ];
    }, 100);
  }
}


