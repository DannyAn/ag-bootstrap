import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {
//   //NgbdAccordion,
//   NgbdAlert,
//   NgbdButtons,
//   NgbdCarousel,
//   NgbdCollapse,
//   NgbdDatepicker,
//   NgbdDropdown,
//   NgbdModal,
//   NgbdPagination,
//   NgbdPopover,
//   NgbdProgressbar,
//   NgbdRating,
//   NgbdTabs,
//   // NgbdTimepicker,
//   NgbdTooltip,
//   NgbdTypeahead,
//   NgbdCheckbox,
//   NgbdRadio,
//   NgbdTable,
//   NgbdMenu,
//   NgbdSwitch,
//   NgbdDropDownExt,
//   NgbdTransfer,
//   NgbdSelect,
//   NgbdSteps,
//   NgbdTimeline,
// } from './index';
import { DEFAULT_TAB } from '../shared/component-wrapper/component-wrapper.component';

//const DEFAULT_API_PATH = { path: '', pathMatch: 'full', redirectTo: DEFAULT_TAB };
const DEFAULT_PATH = { path: '', pathMatch: 'full', redirectTo: 'accordion' };
const componentRoutes: Routes = [
  DEFAULT_PATH,
  {
    path: 'accordion',
    loadChildren: './accordion/index#NgbdAccordionModule',
    //loadChildren: './accordion/index#NgbdAccordionModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   //{ path: ':tab', component: NgbdAccordion }
    // ]
  }, {
    path: 'alert',
    loadChildren: './alert/index#NgbdAlertModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdAlert }
    // ]
  }, {
    path: 'buttons',
    loadChildren: './buttons/index#NgbdButtonsModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdButtons }
    // ]
  }, {
    path: 'carousel',
    loadChildren: './carousel/index#NgbdCarouselModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdCarousel }
    // ]
  }, {
    path: 'collapse',
    loadChildren: './collapse/index#NgbdCollapseModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdCollapse }
    // ]
  }, {
    path: 'datepicker',
    loadChildren: './datepicker/index#NgbdDatepickerModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdDatepicker }
    // ]
  }, {
    path: 'dropdown',
    loadChildren: './dropdown/index#NgbdDropdownModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdDropdown }
    // ]
  }, {
    path: 'dropdownext',
    loadChildren: './nzdropdown/index#NgbdDropDownExtModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdDropDownExt }
    // ]
  }, {
    path: 'modal',
    loadChildren: './modal/index#NgbdModalModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdModal }
    // ]
  }, {
    path: 'pagination',
    loadChildren: './pagination/index#NgbdPaginationModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdPagination }
    // ]
  }, {
    path: 'popover',
    loadChildren: './popover/index#NgbdPopoverModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdPopover }
    // ]
  }, {
    path: 'progressbar',
    loadChildren: './progressbar/index#NgbdProgressbarModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdProgressbar }
    // ]
  }, {
    path: 'rating',
    loadChildren: './rating/index#NgbdRatingModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdRating }
    // ]
  }, {
    path: 'tabs',
    loadChildren: './tabset/index#NgbdTabsModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdTabs }
    // ]
  },
  {
    path: 'timepicker',
    loadChildren: './timepicker/timepicker.module#NgbdTimepickerModule',
    // children: [
    //   DEFAULT_API_PATH],
    // loadChildren: 'app/components/timepicker/timepicker.module#NgbdTimepickerModule'
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', redirectTo: 'app/components/timepicker/timepicker.module#NgbdTimepickerModule'}
    // ]
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', redirectTo: 'components/timepicker/timepicker.module#NgbdTimepickerModule' }

    // ]
  }
  , {
    path: 'tooltip',
    loadChildren: './tooltip/index#NgbdTooltipModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdTooltip }
    // ]
  }, {
    path: 'typeahead',
    loadChildren: './typeahead/index#NgbdTypeaheadModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdTypeahead }
    // ]
  }, {
    path: 'checkbox',
    loadChildren: './checkbox/index#NgbdCheckboxModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdCheckbox }
    // ]
  }, {
    path: 'radio',
    loadChildren: './radio/index#NgbdRadioModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdRadio }
    // ]
  },
  {
    path: 'table',
    loadChildren: './table/index#NgbdTableModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdTable }
    // ]
  },
  {
    path: 'switch',
    loadChildren: './switch/index#NgbdSwitchModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdSwitch }
    // ]
  },
  {
    path: 'menu',
    loadChildren: './menu/index#NgbdMenuModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdMenu }
    // ]
  },
  {
    path: 'transfer',
    loadChildren: './transfer/index#NgbdTransferModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdTransfer }
    // ]
  },
  {
    path: 'select',
    loadChildren: './select/index#NgbdSelectModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdSelect }
    // ]
  },
  {
    path: 'steps',
    loadChildren: './steps/index#NgbdStepsModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdSteps }
    // ]
  },
  {
    path: 'timeline',
    loadChildren: './timeline/index#NgbdTimelineModule',
    // children: [
    //   DEFAULT_API_PATH,
    //   { path: ':tab', component: NgbdTimeline }
    // ]
  }
];
@NgModule({
  imports: [RouterModule.forChild([
    ...componentRoutes,
  ])],
  exports: [RouterModule]
})
export class NgbdComponentsRoutingModule {
}
