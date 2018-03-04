import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nz-layout',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: [],
  host: {'[class.ant-layout]': 'true'}
})
export class NzLayoutComponent {
  @HostBinding('class.ant-layout-has-sider') hasSider = false;
}
