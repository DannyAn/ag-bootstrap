import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export const componentsList = [
  { name: 'Accordion', href: 'accordion', title: 'Accordion' },
  { name: 'Alert', href: 'alert', title: 'Alert' },
  { name: 'Carousel', href: 'carousel', title: 'Carousel' },
  { name: 'Datepicker', href: 'datepicker', title: 'Datepicker' },
  { name: 'Modal', href: 'modal', title: 'Modal' },
  { name: 'Pagination', href: 'pagination', title: 'Pagination' },
  { name: 'Progressbar', href: 'progressbar', title: 'Progressbar' },
  { name: 'Rating', href: 'rating', title: 'Rating' },
  { name: 'Tabs', href: 'tabs', title: 'Tabs' },
  { name: 'Timepicker', href: 'timepicker', title: 'Timepicker' },
  { name: 'Checkbox', href: 'checkbox', title: 'Checkbox' },
  { name: 'Radio', href: 'radio', title: 'Radio' },
  { name: 'Switch', href: 'switch', title: 'Switch' },
  { name: 'Table', href: 'table', title: 'Table' },
  { name: 'Grid', href: 'grid', title: 'Grid' },
  { name: 'Transfer', href: 'transfer', title: 'Transfer' },
  { name: 'DropDownExt', href: 'dropdownext', title: 'DropDown' },
  { name: 'Menu', href: 'menu', title: 'Menu' },
];

export const directivesList = [
  'Buttons',
  'Collapse',
  'Dropdown',
  'Popover',
  'Tooltip',
  'Typeahead'
];
@Component({
  selector: 'ngbd-side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {
  @Input() showDirective: boolean = true;
  @Input() activeTab: String;
  components = componentsList;
  directives = directivesList;
  constructor(private router: Router) { }

  isActive(currentRoute: any[]): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute), true);
  }
}
