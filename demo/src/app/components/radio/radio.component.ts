import { Component, ViewEncapsulation } from '@angular/core';

import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ngbd-radio',
  template: `
  <ngbd-component-wrapper component="Radio">
    <ngbd-api-docs directive="NzRadioComponent"></ngbd-api-docs>
    <ngbd-api-docs directive="NzRadioGroupComponent"></ngbd-api-docs>
    <ngbd-example-box demoTitle="Radio Group" [snippets]="snippets" component="radio" demo="group">
      <ngbd-radio-group></ngbd-radio-group>
    </ngbd-example-box>
    <ngbd-example-box demoTitle="Radio Group Disabled" [snippets]="snippets" component="radio" demo="group-disabled">
        <ngbd-radio-group-disabled></ngbd-radio-group-disabled>
      </ngbd-example-box>
  </ngbd-component-wrapper>
  `
})
export class NgbdRadio {
   snippets = DEMO_SNIPPETS;
}
/*
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector     : 'nz-demo-radio',
  encapsulation: ViewEncapsulation.None,
  templateUrl  : './nz-demo-radio.html',
  styleUrls    : [
    './nz-demo-radio.less',
  ]
})
export class NzDemoRadioComponent {
  
  NzDemoRadioGroupCode = require('!!raw-loader!./nz-demo-radio-group.component');
  NzDemoRadioGroupDisabledCode = require('!!raw-loader!./nz-demo-radio-group-disabled.component');
  NzDemoRadioButtonGroupCode = require('!!raw-loader!./nz-demo-radio-button-group.component');
  NzDemoRadioButtonGroupSizeCode = require('!!raw-loader!./nz-demo-radio-button-group-size.component');
  
}
*/