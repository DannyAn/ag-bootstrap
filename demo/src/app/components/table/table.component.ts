import { Component, ViewEncapsulation } from '@angular/core';

import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ngbd-table',
  template: `
    <ngbd-component-wrapper component="Table">
      <ngbd-api-docs directive="NzTableComponent"></ngbd-api-docs>

      <ngbd-example-box demoTitle="Table Custom Filter" [snippets]="snippets" component="table" demo="custom-filter">
        <ngbd-table-custom-filter></ngbd-table-custom-filter>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Table Basic" [snippets]="snippets" component="table" demo="basic">
        <ngbd-table-basic></ngbd-table-basic>
      </ngbd-example-box>
      
      <ngbd-example-box demoTitle="Table no pagination" [snippets]="snippets" component="table" demo="nopagination">
        <ngbd-table-nopagination></ngbd-table-nopagination>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Table Paging" [snippets]="snippets" component="table" demo="paging">
        <ngbd-table-paging></ngbd-table-paging>
      </ngbd-example-box>
      
       <ngbd-example-box demoTitle="Table Edit" [snippets]="snippets" component="table" demo="edit">
         <ngbd-table-edit></ngbd-table-edit>
       </ngbd-example-box>
      
       <ngbd-example-box demoTitle="Table Expand" [snippets]="snippets" component="table" demo="expand">
         <ngbd-table-expand></ngbd-table-expand>
       </ngbd-example-box>
       <ngbd-example-box demoTitle="Table Expand Tree" [snippets]="snippets" component="table" demo="expand-tree">
       <ngbd-table-expand-tree></ngbd-table-expand-tree>
     </ngbd-example-box>
     <ngbd-example-box demoTitle="Table Fixed Header" [snippets]="snippets" component="table" demo="fixed-header">
       <ngbd-table-fixed-header></ngbd-table-fixed-header>
     </ngbd-example-box>
     
     <ngbd-example-box demoTitle="Table Reset Filter" [snippets]="snippets" component="table" demo="reset-filter">
       <ngbd-table-reset-filter></ngbd-table-reset-filter>
     </ngbd-example-box>
     
     <ngbd-example-box demoTitle="Table Selection" [snippets]="snippets" component="table" demo="selection">
       <ngbd-table-selection></ngbd-table-selection>
     </ngbd-example-box>
     <ngbd-example-box demoTitle="Table Selection and Operation" [snippets]="snippets" component="table" demo="selection-and-operation">
       <ngbd-table-selection-and-operation></ngbd-table-selection-and-operation>
     </ngbd-example-box>
     <ngbd-example-box demoTitle="Table Selection Props" [snippets]="snippets" component="table" demo="selection-props">
       <ngbd-table-selection-props></ngbd-table-selection-props>
     </ngbd-example-box>
     <ngbd-example-box demoTitle="Table Size" [snippets]="snippets" component="table" demo="size">
       <ngbd-table-size></ngbd-table-size>
     </ngbd-example-box>
     <ngbd-example-box demoTitle="Table Span" [snippets]="snippets" component="table" demo="span">
       <ngbd-table-colspan-rowspan></ngbd-table-colspan-rowspan>
     </ngbd-example-box>
     <ngbd-example-box demoTitle="Table Ajax" [snippets]="snippets" component="table" demo="ajax">
       <ngbd-table-ajax></ngbd-table-ajax>
     </ngbd-example-box>
    </ngbd-component-wrapper>
  `
})
export class NgbdTable {
   snippets = DEMO_SNIPPETS;
}
