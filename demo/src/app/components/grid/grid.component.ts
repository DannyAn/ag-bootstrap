import { Component, ViewEncapsulation } from '@angular/core';

import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ngbd-grid',
  template: `
    <ngbd-component-wrapper component="Grid">
      <ngbd-api-docs directive="NzRowComponent"></ngbd-api-docs>
      <ngbd-api-docs directive="NzColComponent"></ngbd-api-docs>
      <ngbd-example-box demoTitle="Grid Basic" [snippets]="snippets" component="grid" demo="basic">
        <ngbd-grid-basic></ngbd-grid-basic>
      </ngbd-example-box>
    </ngbd-component-wrapper>
  `,
  styles:[
    `
    .grid-demo .demo-row,
[id^="components-grid-demo-"] .demo-row,
.grid-demo .code-box-demo .demo-row,
[id^="components-grid-demo-"] .code-box-demo .demo-row {
  background-image: -webkit-linear-gradient(left, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
  background-image: linear-gradient(90deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
  overflow: hidden;
  margin-bottom: 8px;
}

.grid-demo .ant-row-flex,
[id^="components-grid-demo-"] .ant-row-flex,
.grid-demo .code-box-demo .ant-row-flex,
[id^="components-grid-demo-"] .code-box-demo .ant-row-flex {
  background: #F5F5F5;
}

.grid-demo .ant-row > div,
[id^="components-grid-demo-"] .ant-row > div,
.grid-demo .code-box-demo .ant-row > div,
[id^="components-grid-demo-"] .code-box-demo .ant-row > div,
.grid-demo .ant-row-flex > div,
[id^="components-grid-demo-"] .ant-row-flex > div,
.grid-demo .code-box-demo .ant-row-flex > div,
[id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div {
  padding: 5px 0;
  text-align: center;
  border-radius: 0;
  min-height: 30px;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #fff;
}

.grid-demo .code-box-demo .ant-row > div:not(.gutter-row),
[id^="components-grid-demo-"] .code-box-demo .ant-row > div:not(.gutter-row),
.grid-demo .code-box-demo .ant-row-flex > div:not(.gutter-row),
[id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div:not(.gutter-row) {
  background: #00A0E9;
  padding: 16px 0;
}

.grid-demo .code-box-demo .ant-row > div:not(.gutter-row):nth-child(2n+1),
[id^="components-grid-demo-"] .code-box-demo .ant-row > div:not(.gutter-row):nth-child(2n+1),
.grid-demo .code-box-demo .ant-row-flex > div:not(.gutter-row):nth-child(2n+1),
[id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div:not(.gutter-row):nth-child(2n+1) {
  background: rgba(0, 160, 233, 0.7);
}

.grid-demo .ant-row .demo-col,
[id^="components-grid-demo-"] .ant-row .demo-col,
.grid-demo .code-box-demo .ant-row .demo-col,
[id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col {
  text-align: center;
  padding: 30px 0;
  color: #fff;
  font-size: 18px;
  border: none;
  margin-top: 0;
  margin-bottom: 0;
}

.grid-demo .ant-row .demo-col-1,
[id^="components-grid-demo-"] .ant-row .demo-col-1,
.grid-demo .ant-row .demo-col-1,
[id^="components-grid-demo-"] .ant-row .demo-col-1 {
  background: rgba(0, 160, 233, 0.7);
}

.grid-demo .ant-row .demo-col-2,
[id^="components-grid-demo-"] .ant-row .demo-col-2,
.grid-demo .code-box-demo .ant-row .demo-col-2,
[id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-2 {
  background: rgba(0, 160, 233, 0.5);
}

.grid-demo .ant-row .demo-col-3,
[id^="components-grid-demo-"] .ant-row .demo-col-3,
.grid-demo .code-box-demo .ant-row .demo-col-3,
[id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-3 {
  background: rgba(255, 255, 255, 0.2);
  color: #999;
}

.grid-demo .ant-row .demo-col-4,
[id^="components-grid-demo-"] .ant-row .demo-col-4,
.grid-demo .code-box-demo .ant-row .demo-col-4,
[id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-4 {
  background: rgba(0, 160, 233, 0.6);
}

.grid-demo .ant-row .demo-col-5,
[id^="components-grid-demo-"] .ant-row .demo-col-5,
.grid-demo .code-box-demo .ant-row .demo-col-5,
[id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-5 {
  background: rgba(255, 255, 255, 0.5);
  color: #999;
}

.grid-demo .code-box-demo .height-100,
[id^="components-grid-demo-"] .code-box-demo .height-100 {
  height: 100px;
  line-height: 100px;
}

.grid-demo .code-box-demo .height-50,
[id^="components-grid-demo-"] .code-box-demo .height-50 {
  height: 50px;
  line-height: 50px;
}

.grid-demo .code-box-demo .height-120,
[id^="components-grid-demo-"] .code-box-demo .height-120 {
  height: 120px;
  line-height: 120px;
}

.grid-demo .code-box-demo .height-80,
[id^="components-grid-demo-"] .code-box-demo .height-80 {
  height: 80px;
  line-height: 80px;
}
.grid-demo .demo-row,
[id^="components-grid-demo-"] .demo-row,
.grid-demo .code-box-demo .demo-row,
[id^="components-grid-demo-"] .code-box-demo .demo-row {
  background-image: -webkit-linear-gradient(left, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
  background-image: linear-gradient(90deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
  overflow: hidden;
  margin-bottom: 8px;
}

.grid-demo .ant-row-flex,
[id^="components-grid-demo-"] .ant-row-flex,
.grid-demo .code-box-demo .ant-row-flex,
[id^="components-grid-demo-"] .code-box-demo .ant-row-flex {
  background: #F5F5F5;
}

.grid-demo .ant-row > div,
[id^="components-grid-demo-"] .ant-row > div,
.grid-demo .code-box-demo .ant-row > div,
[id^="components-grid-demo-"] .code-box-demo .ant-row > div,
.grid-demo .ant-row-flex > div,
[id^="components-grid-demo-"] .ant-row-flex > div,
.grid-demo .code-box-demo .ant-row-flex > div,
[id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div {
  padding: 5px 0;
  text-align: center;
  border-radius: 0;
  min-height: 30px;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #fff;
}

.grid-demo .code-box-demo .ant-row > div:not(.gutter-row),
[id^="components-grid-demo-"] .code-box-demo .ant-row > div:not(.gutter-row),
.grid-demo .code-box-demo .ant-row-flex > div:not(.gutter-row),
[id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div:not(.gutter-row) {
  background: #00A0E9;
  padding: 16px 0;
}

.grid-demo .code-box-demo .ant-row > div:not(.gutter-row):nth-child(2n+1),
[id^="components-grid-demo-"] .code-box-demo .ant-row > div:not(.gutter-row):nth-child(2n+1),
.grid-demo .code-box-demo .ant-row-flex > div:not(.gutter-row):nth-child(2n+1),
[id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div:not(.gutter-row):nth-child(2n+1) {
  background: rgba(0, 160, 233, 0.7);
}

.grid-demo .ant-row .demo-col,
[id^="components-grid-demo-"] .ant-row .demo-col,
.grid-demo .code-box-demo .ant-row .demo-col,
[id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col {
  text-align: center;
  padding: 30px 0;
  color: #fff;
  font-size: 18px;
  border: none;
  margin-top: 0;
  margin-bottom: 0;
}

.grid-demo .ant-row .demo-col-1,
[id^="components-grid-demo-"] .ant-row .demo-col-1,
.grid-demo .ant-row .demo-col-1,
[id^="components-grid-demo-"] .ant-row .demo-col-1 {
  background: rgba(0, 160, 233, 0.7);
}

.grid-demo .ant-row .demo-col-2,
[id^="components-grid-demo-"] .ant-row .demo-col-2,
.grid-demo .code-box-demo .ant-row .demo-col-2,
[id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-2 {
  background: rgba(0, 160, 233, 0.5);
}

.grid-demo .ant-row .demo-col-3,
[id^="components-grid-demo-"] .ant-row .demo-col-3,
.grid-demo .code-box-demo .ant-row .demo-col-3,
[id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-3 {
  background: rgba(255, 255, 255, 0.2);
  color: #999;
}

.grid-demo .ant-row .demo-col-4,
[id^="components-grid-demo-"] .ant-row .demo-col-4,
.grid-demo .code-box-demo .ant-row .demo-col-4,
[id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-4 {
  background: rgba(0, 160, 233, 0.6);
}

.grid-demo .ant-row .demo-col-5,
[id^="components-grid-demo-"] .ant-row .demo-col-5,
.grid-demo .code-box-demo .ant-row .demo-col-5,
[id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-5 {
  background: rgba(255, 255, 255, 0.5);
  color: #999;
}

.grid-demo .code-box-demo .height-100,
[id^="components-grid-demo-"] .code-box-demo .height-100 {
  height: 100px;
  line-height: 100px;
}

.grid-demo .code-box-demo .height-50,
[id^="components-grid-demo-"] .code-box-demo .height-50 {
  height: 50px;
  line-height: 50px;
}

.grid-demo .code-box-demo .height-120,
[id^="components-grid-demo-"] .code-box-demo .height-120 {
  height: 120px;
  line-height: 120px;
}

.grid-demo .code-box-demo .height-80,
[id^="components-grid-demo-"] .code-box-demo .height-80 {
  height: 80px;
  line-height: 80px;
}

    `
  ]
})
export class NgbdGrid {
   snippets = DEMO_SNIPPETS;
}
