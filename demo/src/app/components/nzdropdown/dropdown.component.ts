import { Component, ViewEncapsulation } from '@angular/core';

import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ngbd-dropdownext',
  template: `
    <ngbd-component-wrapper component="DropDownExt">
      <ngbd-api-docs directive="NzDropDownComponent"></ngbd-api-docs>
      <ngbd-example-box demoTitle="DropDown Basic" [snippets]="snippets" component="dropdown" demo="basic">
        <nz-dropdown-basic></nz-dropdown-basic>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="DropDown Button" [snippets]="snippets" component="dropdown" demo="button">
      <ngbd-dropdown-button></ngbd-dropdown-button>
    </ngbd-example-box>

    <ngbd-example-box demoTitle="DropDown Cascading" [snippets]="snippets" component="dropdown" demo="cascading">
      <ngbd-dropdown-cascading></ngbd-dropdown-cascading>
    </ngbd-example-box>

    <ngbd-example-box demoTitle="DropDown Click" [snippets]="snippets" component="dropdown" demo="click">
      <ngbd-dropdown-click></ngbd-dropdown-click>
    </ngbd-example-box>

    <ngbd-example-box demoTitle="DropDown Hide" [snippets]="snippets" component="dropdown" demo="hide">
      <ngbd-dropdown-hide></ngbd-dropdown-hide>
    </ngbd-example-box>

    <ngbd-example-box demoTitle="DropDown Other" [snippets]="snippets" component="dropdown" demo="other">
      <ngbd-dropdown-other></ngbd-dropdown-other>
    </ngbd-example-box>

    <ngbd-example-box demoTitle="DropDown Position" [snippets]="snippets" component="dropdown" demo="position">
      <ngbd-dropdown-position></ngbd-dropdown-position>
    </ngbd-example-box>
    </ngbd-component-wrapper>
  ` ,
})
export class NgbdDropDownExt {
   snippets = DEMO_SNIPPETS;
}
