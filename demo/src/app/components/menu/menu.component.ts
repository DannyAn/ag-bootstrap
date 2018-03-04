import { Component, ViewEncapsulation } from '@angular/core';

import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ngbd-menu',
  template: `
    <ngbd-component-wrapper component="Menu">
      <ngbd-api-docs directive="NzMenuComponent"></ngbd-api-docs>
      <ngbd-example-box demoTitle="Basic Menu" [snippets]="snippets" component="menu" demo="basic">
        <ngbd-menu-basic></ngbd-menu-basic>
      </ngbd-example-box>
      
      <ngbd-example-box demoTitle="Collapsed Menu" [snippets]="snippets" component="menu" demo="collapsed">
      <ngbd-menu-collapsed></ngbd-menu-collapsed>
    </ngbd-example-box>

    <ngbd-example-box demoTitle="Dynamic Menu" [snippets]="snippets" component="menu" demo="dynamic">
      <ngbd-menu-dynamic></ngbd-menu-dynamic>
    </ngbd-example-box>

    <ngbd-example-box demoTitle="Expand Menu" [snippets]="snippets" component="menu" demo="expand">
      <ngbd-menu-expand></ngbd-menu-expand>
    </ngbd-example-box>

    <ngbd-example-box demoTitle="Inline Menu" [snippets]="snippets" component="menu" demo="inline">
      <ngbd-menu-inline></ngbd-menu-inline>
    </ngbd-example-box>

    <ngbd-example-box demoTitle="Menu Theme" [snippets]="snippets" component="menu" demo="theme">
      <ngbd-menu-theme></ngbd-menu-theme>
    </ngbd-example-box>

    <ngbd-example-box demoTitle="Menu Vertical" [snippets]="snippets" component="menu" demo="vertical">
      <ngbd-menu-vertical></ngbd-menu-vertical>
    </ngbd-example-box>
    </ngbd-component-wrapper>
  `
})
export class NgbdMenu {
   snippets = DEMO_SNIPPETS;
}
