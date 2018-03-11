import { Component, ViewEncapsulation } from '@angular/core';

import { DEMO_SNIPPETS } from './demos';

@Component({
  selector: 'ngbd-select',
  template: `
    <ngbd-component-wrapper component="Select">
      <ngbd-api-docs directive="NzSelectComponent"></ngbd-api-docs>
      <ngbd-example-box demoTitle="Basic Select" [snippets]="snippets" component="select" demo="basic">
        <ngbd-select-basic></ngbd-select-basic>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Multiple for Select" [snippets]="snippets" component="select" demo="multiple">
        <ngbd-select-multiple></ngbd-select-multiple>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Multiple Change for Select" [snippets]="snippets" component="select" demo="multiple-change">
      <ngbd-select-multiple-change></ngbd-select-multiple-change>
    </ngbd-example-box>
    <ngbd-example-box demoTitle="Pagination for Select" [snippets]="snippets" component="select" demo="pagination">
        <ngbd-select-pagination></ngbd-select-pagination>
      </ngbd-example-box>
    <ngbd-example-box demoTitle="Search for Select" [snippets]="snippets" component="select" demo="search">
      <ngbd-select-search></ngbd-select-search>
    </ngbd-example-box>
    
    <ngbd-example-box demoTitle="Search-Change for Select" [snippets]="snippets" component="select" demo="search-change">
      <ngbd-select-search-change></ngbd-select-search-change>
    </ngbd-example-box>
    
    <ngbd-example-box demoTitle="Search size for Select" [snippets]="snippets" component="select" demo="size">
      <ngbd-select-size></ngbd-select-size>
    </ngbd-example-box>
    <ngbd-example-box demoTitle="Search Tag for Select" [snippets]="snippets" component="select" demo="tag">
      <ngbd-select-tag></ngbd-select-tag>
    </ngbd-example-box>
    </ngbd-component-wrapper>
  `,
  styles: [`
  [id^="components-select-demo-"] nz-select.ant-select{
    margin: 0 8px 10px 0;
  }
  `]
})
export class NgbdSelect {
  snippets = DEMO_SNIPPETS;
}
