import { Component, ViewEncapsulation } from '@angular/core';

import { DEMO_SNIPPETS } from './demos';

@Component({
  selector: 'ngbd-timeline',
  template: `
    <ngbd-component-wrapper component="Timeline">
      <ngbd-api-docs directive="NzTimelineComponent"></ngbd-api-docs>
      <ngbd-example-box demoTitle="Basic Timeline" [snippets]="snippets" component="timeline" demo="basic">
        <ngbd-timeline-basic></ngbd-timeline-basic>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Timeline Color" [snippets]="snippets" component="timeline" demo="color">
        <ngbd-timeline-color></ngbd-timeline-color>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Timeline Pending" [snippets]="snippets" component="timeline" demo="pending">
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
