import { Component, ViewEncapsulation } from '@angular/core';

import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ngbd-switch',
  template: `
    <ngbd-component-wrapper component="Switch">
      <ngbd-api-docs directive="NzSwitchComponent"></ngbd-api-docs>
      <ngbd-example-box demoTitle="Basic Switch" [snippets]="snippets" component="switch" demo="basic">
        <ngbd-switch-basic></ngbd-switch-basic>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Disabled Switch" [snippets]="snippets" component="switch" demo="disabled">
      <ngbd-switch-disabled></ngbd-switch-disabled>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Switch Size" [snippets]="snippets" component="switch" demo="size">
      <ngbd-switch-size></ngbd-switch-size>
    </ngbd-example-box>
    <ngbd-example-box demoTitle="Switch Text" [snippets]="snippets" component="switch" demo="text">
      <ngbd-switch-text></ngbd-switch-text>
    </ngbd-example-box>
    
    </ngbd-component-wrapper>
  `
})
export class NgbdSwitch{
   snippets = DEMO_SNIPPETS;
}
