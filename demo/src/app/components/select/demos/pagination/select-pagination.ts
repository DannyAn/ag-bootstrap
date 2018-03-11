import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-select-pagination',
  templateUrl: './select-pagination.html',
  styles: []
})
export class NgbdSelectPagination implements OnInit {
  options = [];
  selectedOption;
  loading = false;
  index = 0;

  scrollToBottom() {
    if (!this.loading) {
      this.loading = true;
      setTimeout(() => {
        this.generateFakeData();
        this.loading = false;
      }, 3000);
    }
  }

  generateFakeData() {
    for (let i = 0; i < 5; i++) {
      this.options.push({ value: this.index, label: `option${this.index}` });
      this.index++;
    }
  }

  ngOnInit() {
    this.generateFakeData();
    this.selectedOption = this.options[0];
  }
}


