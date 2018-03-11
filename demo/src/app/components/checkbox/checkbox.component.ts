import { Component, ViewEncapsulation } from '@angular/core';

import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ngbd-checkbox',
  template: `
    <ngbd-component-wrapper component="Checkbox">
      <ngbd-api-docs directive="NzCheckboxComponent"></ngbd-api-docs>
      <ngbd-api-docs directive="NzCheckboxGroupComponent"></ngbd-api-docs>
      <ngbd-example-box demoTitle="Basic Checkbox" [snippets]="snippets" component="checkbox" demo="basic">
        <ngbd-checkbox-basic></ngbd-checkbox-basic>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Disabled Checkbox" [snippets]="snippets" component="checkbox" demo="disabled">
      <ngbd-checkbox-disabled></ngbd-checkbox-disabled>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Controller Checkbox" [snippets]="snippets" component="checkbox" demo="controller">
      <ngbd-checkbox-controller></ngbd-checkbox-controller>
    </ngbd-example-box>
    <ngbd-example-box demoTitle="Group Checkbox" [snippets]="snippets" component="checkbox" demo="group">
      <ngbd-checkbox-group></ngbd-checkbox-group>
    </ngbd-example-box>
    <ngbd-example-box demoTitle="Indeterminate Checkbox" [snippets]="snippets" component="checkbox" demo="indeterminate">
      <ngbd-checkbox-indeterminate></ngbd-checkbox-indeterminate>
    </ngbd-example-box>
    </ngbd-component-wrapper>
  `
})
export class NgbdCheckbox {
   snippets = DEMO_SNIPPETS;
}