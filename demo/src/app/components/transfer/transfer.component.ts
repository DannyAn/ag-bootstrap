import { Component, ViewEncapsulation } from '@angular/core';

import { DEMO_SNIPPETS } from './demos';

@Component({
  selector: 'ngbd-transfer',
  template: `
    <ngbd-component-wrapper component="Transfer">
      <ngbd-api-docs directive="NzTransferComponent"></ngbd-api-docs>
      <ngbd-api-docs directive="NzTransferListComponent"></ngbd-api-docs>
      <ngbd-example-box demoTitle="Basic Transfer" [snippets]="snippets" component="transfer" demo="basic">
        <ngbd-transfer-basic></ngbd-transfer-basic>
      </ngbd-example-box>
     
      <ngbd-example-box demoTitle="Advanced Transfer" [snippets]="snippets" component="transfer" demo="advanced">
      <ngbd-transfer-advanced></ngbd-transfer-advanced>
      </ngbd-example-box>
     
      <ngbd-example-box demoTitle="Can-Move Transfer" [snippets]="snippets" component="transfer" demo="can-move">
      <ngbd-transfer-can-move></ngbd-transfer-can-move>
    </ngbd-example-box>

    <ngbd-example-box demoTitle="Custom Item" [snippets]="snippets" component="transfer" demo="custom-item">
      <ngbd-transfer-custom-item></ngbd-transfer-custom-item>
    </ngbd-example-box>
    <ngbd-example-box demoTitle="Search Transfer" [snippets]="snippets" component="transfer" demo="search">
      <ngbd-transfer-search></ngbd-transfer-search>
    </ngbd-example-box>
    
    </ngbd-component-wrapper>
  `
})
export class NgbdTransfer {
  snippets = DEMO_SNIPPETS;
}