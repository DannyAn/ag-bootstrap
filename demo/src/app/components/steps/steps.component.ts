import { Component, ViewEncapsulation } from '@angular/core';

import { DEMO_SNIPPETS } from './demos';

@Component({
  selector: 'ngbd-steps',
  template: `
    <ngbd-component-wrapper component="Steps">
      <ngbd-api-docs directive="NzStepsComponent"></ngbd-api-docs>
      <ngbd-example-box demoTitle="Basic Steps" [snippets]="snippets" component="steps" demo="basic">
        <ngbd-steps-basic></ngbd-steps-basic>
      </ngbd-example-box>

      <ngbd-example-box demoTitle="Steps Change" [snippets]="snippets" component="steps" demo="change">
        <ngbd-steps-change></ngbd-steps-change>
      </ngbd-example-box>

      <ngbd-example-box demoTitle="Steps Dotted" [snippets]="snippets" component="steps" demo="dotted">
      <ngbd-steps-dotted></ngbd-steps-dotted>
    </ngbd-example-box>

    <ngbd-example-box demoTitle="Steps Error" [snippets]="snippets" component="steps" demo="error">
        <ngbd-steps-error></ngbd-steps-error>
      </ngbd-example-box>
    <ngbd-example-box demoTitle="Step Icon" [snippets]="snippets" component="steps" demo="icon">
      <ngbd-steps-icon></ngbd-steps-icon>
    </ngbd-example-box>
    
    <ngbd-example-box demoTitle="Steps Mini" [snippets]="snippets" component="steps" demo="mini">
      <ngbd-steps-mini></ngbd-steps-mini>
    </ngbd-example-box>
    
    <ngbd-example-box demoTitle="Steps Vertical" [snippets]="snippets" component="steps" demo="vertical">
      <ngbd-steps-vertical></ngbd-steps-vertical>
    </ngbd-example-box>
    
    <ngbd-example-box demoTitle="Vertical Mini" [snippets]="snippets" component="steps" demo="vertical-mini">
      <ngbd-steps-vertical-mini></ngbd-steps-vertical-mini>
    </ngbd-example-box>
    </ngbd-component-wrapper>
  `,
  styles: [``]
})
export class NgbdSteps {
  snippets = DEMO_SNIPPETS;
}
