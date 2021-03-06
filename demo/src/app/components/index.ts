export * from './accordion';
export * from './alert';
export * from './buttons';
export * from './carousel';
export * from './collapse';
export * from './datepicker';
export * from './dropdown';
export * from './modal';
export * from './pagination';
export * from './popover';
export * from './progressbar';
export * from './rating';
export * from './tabset';
//export * from './timepicker';
export * from './tooltip';
export * from './typeahead';

export * from './checkbox';
export * from './radio';
export * from './table';
export * from './switch';
export * from './menu';
export * from './nzdropdown';
export * from './transfer';
export * from './select';
export * from './steps';
export * from './timeline';

import { NgModule } from '@angular/core';

import { NgbdSharedModule } from '../shared';

import { NgbdComponentsRoutingModule } from './components.routing';
//import { NgbdAccordionModule } from './accordion';
import { NgbdAlertModule } from './alert';
import { NgbdButtonsModule } from './buttons';
import { NgbdCarouselModule } from './carousel';
import { NgbdCollapseModule } from './collapse';
import { NgbdDatepickerModule } from './datepicker';
import { NgbdDropdownModule } from './dropdown';
import { NgbdModalModule } from './modal';
import { NgbdPaginationModule } from './pagination';
import { NgbdPopoverModule } from './popover';
import { NgbdProgressbarModule } from './progressbar';
import { NgbdRatingModule } from './rating';
import { NgbdTabsModule } from './tabset';
// import { NgbdTimepickerModule } from './timepicker';
import { NgbdTooltipModule } from './tooltip';
import { NgbdTypeaheadModule } from './typeahead';

import { NgbdCheckboxModule } from './checkbox';
import { NgbdRadioModule } from './radio';
import { NgbdTableModule } from './table';
import { NgbdSwitchModule } from './switch';
import { NgbdMenuModule } from './menu';
import { NgbdTransferModule } from './transfer';
import { NgbdDropDownExtModule } from './nzdropdown';
import { NgbdSelectModule } from './select';
import { NgbdTimelineModule } from './timeline';
import { NgbdStepsModule } from './steps';

@NgModule({
  imports: [
    NgbdSharedModule,
    NgbdComponentsRoutingModule,
    //NgbdAccordionModule,
    // NgbdAlertModule,
    // NgbdButtonsModule,
    // NgbdCarouselModule,
    // NgbdCollapseModule,
    // NgbdDatepickerModule,
    // NgbdDropdownModule,
    // NgbdModalModule,
    // NgbdPaginationModule,
    // NgbdPopoverModule,
    // NgbdProgressbarModule,
    // NgbdRatingModule,
    // NgbdTabsModule,
    //NgbdTimepickerModule,
    // NgbdTooltipModule,
    // NgbdTypeaheadModule,
    // NgbdCheckboxModule,
    // NgbdRadioModule,
    // NgbdTableModule,
    // NgbdSwitchModule,
    // NgbdMenuModule,
    // NgbdDropDownExtModule,
    // NgbdTransferModule,
    // NgbdSelectModule,
    // NgbdTimelineModule,
    // NgbdStepsModule,
  ],
  exports: [
    //NgbdAccordionModule,
    // NgbdAlertModule,
    // NgbdButtonsModule,
    // NgbdCarouselModule,
    // NgbdCollapseModule,
    // NgbdDatepickerModule,
    // NgbdDropdownModule,
    // NgbdModalModule,
    // NgbdPaginationModule,
    // NgbdPopoverModule,
    // NgbdProgressbarModule,
    // NgbdRatingModule,
    // NgbdTabsModule,
   // NgbdTimepickerModule,
    // NgbdTooltipModule,
    // NgbdTypeaheadModule,
    // NgbdCheckboxModule,
    // NgbdRadioModule,
    // NgbdTableModule,
    // NgbdSwitchModule,
    // NgbdMenuModule,
    // NgbdDropDownExtModule,
    // NgbdTransferModule,
    // NgbdSelectModule,
    // NgbdTimelineModule,
    // NgbdStepsModule,
  ]
})
export class NgbdDemoModule { }
