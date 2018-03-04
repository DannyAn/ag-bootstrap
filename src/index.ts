import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgbAccordionModule, NgbPanelChangeEvent} from './accordion/accordion.module';
import {NgbAlertModule} from './alert/alert.module';
import {NgbButtonsModule} from './buttons/buttons.module';
import {NgbCarouselModule} from './carousel/carousel.module';
import {NgbCollapseModule} from './collapse/collapse.module';
import {NgbDatepickerModule} from './datepicker/datepicker.module';
import {NgbDropdownModule} from './dropdown/dropdown.module';
import {ModalDismissReasons, NgbModal, NgbModalModule, NgbModalOptions, NgbModalRef} from './modal/modal.module';
import {NgbPaginationModule} from './pagination/pagination.module';
import {NgbPopoverModule} from './popover/popover.module';
import {NgbProgressbarModule} from './progressbar/progressbar.module';
import {NgbRatingModule} from './rating/rating.module';
import {NgbTabChangeEvent, NgbTabsetModule} from './tabset/tabset.module';
import {NgbTimepickerModule} from './timepicker/timepicker.module';
import {NgbTooltipModule} from './tooltip/tooltip.module';
import {NgbTypeaheadModule, NgbTypeaheadSelectItemEvent} from './typeahead/typeahead.module';

import {NzDropDownModule} from './nzdropdown/nz-dropdown.module';
import {NzToolTipModule} from './nztooltip/nz-tooltip.module';
import {NzPopconfirmModule} from './popconfirm/nz-popconfirm.module';
import {NzRadioModule} from './radio/nz-radio.module';
import {NzTransferModule} from './transfer/nz-transfer.module';
import {NzSwitchModule} from './switch/nz-switch.module';
import {NzButtonModule} from './button/nz-button.module';
import {NzCheckboxModule} from './checkbox/nz-checkbox.module';
import {NzFormModule} from './form/nz-form.module';
import {NzGridModule} from './grid/nz-grid.module';
import {NzInputModule} from './input/nz-input.module';
import {NzLayoutModule} from './layout/nz-layout.module';
import {NzMenuModule} from './menu/nz-menu.module';
import {NzSliderModule} from './slider/nz-slider.module';
import {NzTableModule} from './table/nz-table.module';
import {NzSelectModule} from './select/nz-select.module';

export {
  NgbAccordion,
  NgbAccordionConfig,
  NgbAccordionModule,
  NgbPanel,
  NgbPanelChangeEvent,
  NgbPanelContent,
  NgbPanelTitle
} from './accordion/accordion.module';
export {NgbAlert, NgbAlertConfig, NgbAlertModule} from './alert/alert.module';
export {NgbButtonsModule, NgbCheckBox, NgbRadioGroup} from './buttons/buttons.module';
export {NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbSlide} from './carousel/carousel.module';
export {NgbCollapse, NgbCollapseModule} from './collapse/collapse.module';
export {
  NgbCalendar,
  NgbCalendarIslamicCivil,
  NgbCalendarIslamicUmalqura,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDatepicker,
  NgbDatepickerConfig,
  NgbDatepickerI18n,
  NgbDatepickerModule,
  NgbDateStruct,
  NgbInputDatepicker
} from './datepicker/datepicker.module';
export {NgbDropdown, NgbDropdownConfig, NgbDropdownModule} from './dropdown/dropdown.module';
export {
  ModalDismissReasons,
  NgbActiveModal,
  NgbModal,
  NgbModalModule,
  NgbModalOptions,
  NgbModalRef
} from './modal/modal.module';
export {NgbPagination, NgbPaginationConfig, NgbPaginationModule} from './pagination/pagination.module';
export {NgbPopover, NgbPopoverConfig, NgbPopoverModule} from './popover/popover.module';
export {NgbProgressbar, NgbProgressbarConfig, NgbProgressbarModule} from './progressbar/progressbar.module';
export {NgbRating, NgbRatingConfig, NgbRatingModule} from './rating/rating.module';
export {
  NgbTab,
  NgbTabChangeEvent,
  NgbTabContent,
  NgbTabset,
  NgbTabsetConfig,
  NgbTabsetModule,
  NgbTabTitle
} from './tabset/tabset.module';
export {NgbTimepicker, NgbTimepickerConfig, NgbTimepickerModule, NgbTimeStruct} from './timepicker/timepicker.module';
export {NgbTooltip, NgbTooltipConfig, NgbTooltipModule} from './tooltip/tooltip.module';
export {TransferCanMove} from './transfer/transfer-can-move';
export {TransferItem} from './transfer/transfer-item';
export {
  NgbHighlight,
  NgbTypeahead,
  NgbTypeaheadConfig,
  NgbTypeaheadModule,
  NgbTypeaheadSelectItemEvent
} from './typeahead/typeahead.module';
export {Placement} from './util/positioning';

const NGB_MODULES = [
  NgbAccordionModule,   NgbAlertModule,    NgbButtonsModule, NgbCarouselModule,   NgbCollapseModule,
  NgbDatepickerModule,  NgbDropdownModule, NgbModalModule,   NgbPaginationModule, NgbPopoverModule,
  NgbProgressbarModule, NgbRatingModule,   NgbTabsetModule,  NgbTimepickerModule, NgbTooltipModule,
  NgbTypeaheadModule,   NzCheckboxModule,  NzRadioModule,    NzGridModule,        NzSliderModule,
  NzTableModule,        NzDropDownModule,  NzButtonModule,   NzInputModule,       NzSelectModule,
  NzSwitchModule,       NzLayoutModule,    NzFormModule,     NzPopconfirmModule,  NzToolTipModule,
  NzMenuModule,         NzTransferModule
];

@NgModule({
  imports: [
    NgbAlertModule.forRoot(), NgbButtonsModule.forRoot(), NgbCollapseModule.forRoot(), NgbProgressbarModule.forRoot(),
    NgbTooltipModule.forRoot(), NgbTypeaheadModule.forRoot(), NgbAccordionModule.forRoot(), NgbCarouselModule.forRoot(),
    NgbDatepickerModule.forRoot(), NgbDropdownModule.forRoot(), NgbModalModule.forRoot(), NgbPaginationModule.forRoot(),
    NgbPopoverModule.forRoot(), NgbProgressbarModule.forRoot(), NgbRatingModule.forRoot(), NgbTabsetModule.forRoot(),
    NgbTimepickerModule.forRoot(), NgbTooltipModule.forRoot(), NzTransferModule.forRoot()
  ],
  exports: NGB_MODULES
})
export class NgbRootModule {
}

@NgModule({imports: NGB_MODULES, exports: NGB_MODULES})
export class NgbModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbRootModule}; }
}
