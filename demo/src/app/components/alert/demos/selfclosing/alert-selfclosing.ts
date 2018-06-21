import {Component, OnInit} from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngbd-alert-selfclosing',
  templateUrl: './alert-selfclosing.html'
})
export class NgbdAlertSelfclosing implements OnInit {
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;
/**
 *  * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(debounceTime(1000));
 * result.subscribe(x => console.log(x));
 */
  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    const result = this._success.pipe(debounceTime.call(this._success, 5000));
    result.subscribe(() => this.successMessage = null);
    //debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);
  }

  public changeSuccessMessage() {
    this._success.next(`${new Date()} - Message successfully changed.`);
  }
}
