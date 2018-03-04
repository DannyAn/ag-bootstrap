import {Component} from '@angular/core';
import {NgbPaginationConfig} from '@ag-bootstrap/ag-bootstrap';

@Component({
  selector: 'ngbd-pagination-disabled',
  templateUrl: './pagination-disabled.html'
})
export class NgbdPaginationDisabled {
  page = 3;
  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}
