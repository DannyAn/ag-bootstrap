import { Component, ViewEncapsulation } from '@angular/core';

import { DEMO_SNIPPETS } from './demos';

@Component({
  selector: 'ngbd-timeline',
  template: `
    <ngbd-component-wrapper component="Timeline">
      <ngbd-api-docs directive="NzSelectComponent"></ngbd-api-docs>
      <ngbd-example-box demoTitle="Basic Select" [snippets]="snippets" component="select" demo="basic">
        <ngbd-timeline-basic></ngbd-timeline-basic>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Timeline Color" [snippets]="snippets" component="select" demo="color">
        <ngbd-timeline-color></ngbd-timeline-color>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Timeline Pending" [snippets]="snippets" component="select" demo="pending">
      <ngbd-timeline-pending></ngbd-timeline-pending>
    </ngbd-example-box>
    </ngbd-component-wrapper>
  `,
  styles: [`
  [id^="components-select-demo-"] nz-select.ant-select{
    margin: 0 8px 10px 0;
  }
  `]
})
export class NgbdTimeline {
  snippets = DEMO_SNIPPETS;
}
