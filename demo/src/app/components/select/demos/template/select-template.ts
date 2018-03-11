import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-select-template',
  templateUrl: './select-template.html',
  styles  : []
})
export class NgbdSelectTemplate {
  options = [
    { value: 'android', label: 'android' },
    { value: 'apple', label: 'apple' },
    { value: 'windows', label: 'windows' },
    { value: 'ie', label: 'ie' },
    { value: 'chrome', label: 'chrome' },
    { value: 'github', label: 'github' },
    { value: 'aliwangwang', label: 'aliwangwang' },
    { value: 'dingding', label: 'dingding' },
  ];
  selectedOption = this.options[ 0 ];
}


