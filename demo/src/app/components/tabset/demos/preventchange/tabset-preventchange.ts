import {Component} from '@angular/core';
import {NgbTabChangeEvent} from '@ag-bootstrap/ag-bootstrap';

@Component({
  selector: 'ngbd-tabset-preventchange',
  templateUrl: './tabset-preventchange.html'
})
export class NgbdTabsetPreventchange {
    public beforeChange($event: NgbTabChangeEvent) {
      if ($event.nextId === 'tab-preventchange2') {
        $event.preventDefault();
      }
    };
}
