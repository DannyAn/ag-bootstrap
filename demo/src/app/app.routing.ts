import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DefaultComponent} from './default';
import {GettingStarted} from './getting-started';
import {
  NgbdAccordion,
  NgbdAlert,
  NgbdButtons,
  NgbdCarousel,
  NgbdCollapse,
  NgbdDatepicker,
  NgbdDropdown,
  NgbdModal,
  NgbdPagination,
  NgbdPopover,
  NgbdProgressbar,
  NgbdRating,
  NgbdTabs,
  NgbdTimepicker,
  NgbdTooltip,
  NgbdTypeahead,
  NgbdCheckbox,
  NgbdRadio,
  NgbdGrid,
  NgbdTable,
  NgbdMenu,
  NgbdSwitch,
  NgbdDropDownExt,
  NgbdTransfer,
} from './components';
import {DEFAULT_TAB} from './shared/component-wrapper/component-wrapper.component';
// import { NgbdSwitch } from './components/switch';
// import { NgbdMenu } from './components/menu';

const DEFAULT_API_PATH = {path: '', pathMatch: 'full', redirectTo: DEFAULT_TAB};

const componentRoutes = [{
    path: 'components/accordion',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdAccordion}
    ]
  }, {
    path: 'components/alert',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdAlert}
    ]
  }, {
    path: 'components/buttons',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdButtons}
    ]
  }, {
    path: 'components/carousel',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdCarousel}
    ]
  }, {
    path: 'components/collapse',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdCollapse}
    ]
  }, {
    path: 'components/datepicker',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdDatepicker}
    ]
  }, {
    path: 'components/dropdown',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdDropdown}
    ]
  },  {
    path: 'components/dropdownext',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdDropDownExt}
    ]
  }, {
    path: 'components/modal',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdModal}
    ]
  }, {
    path: 'components/pagination',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdPagination}
    ]
  }, {
    path: 'components/popover',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdPopover}
    ]
  }, {
    path: 'components/progressbar',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdProgressbar}
    ]
  }, {
    path: 'components/rating',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdRating}
    ]
  }, {
    path: 'components/tabs',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdTabs}
    ]
  }, {
    path: 'components/timepicker',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdTimepicker}
    ]
  }, {
    path: 'components/tooltip',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdTooltip}
    ]
  }, {
    path: 'components/typeahead',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdTypeahead}
    ]
  }, {
    path: 'components/checkbox',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdCheckbox}
    ]
  }, {
    path: 'components/radio',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdRadio}
    ]
  }, {
    path: 'components/grid',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdGrid}
    ]
  },
  {
    path: 'components/table',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdTable}
    ]
  },
  {
    path: 'components/switch',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdSwitch}
    ]
  },
  {
    path: 'components/menu',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdMenu}
    ]
  },
  {
    path: 'components/transfer',
    children: [
      DEFAULT_API_PATH,
      {path: ':tab', component: NgbdTransfer}
    ]
  }
];

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: DefaultComponent},
  {path: 'getting-started', component: GettingStarted},
  {path: 'components', pathMatch: 'full', redirectTo: 'components/accordion' },
  ...componentRoutes,
  { path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
