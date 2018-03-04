import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-table-custom-filter',
  templateUrl: './table-custom-filter.html',
  styles  : [
      `
      .custom-filter-dropdown {
        padding: 8px;
        border-radius: 6px;
        background: #fff;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
      }

      .custom-filter-dropdown ::ng-deep nz-input {
        width: 130px;
        margin-right: 8px;
      }

      .highlight {
        color: #f50;
      }
    `
  ]
})
export class NgbdTableCustomFilter {
  searchValue = '';
  filterAddressArray = [
    { name: 'London', value: false },
    { name: 'Sidney', value: false }
  ];
  sortMap = {
    name   : null,
    age    : null,
    address: null
  };
  sortName = null;
  sortValue = null;
  data = [
    {
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park',
    }, {
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park',
    }, {
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      name   : 'Jim Red',
      age    : 32,
      address: 'London No. 2 Lake Park',
    }
  ];
  copyData = [ ...this.data ];

  sort(sortName, value) {
    this.sortName = sortName;
    this.sortValue = value;
    Object.keys(this.sortMap).forEach(key => {
      if (key !== sortName) {
        this.sortMap[ key ] = null;
      } else {
        this.sortMap[ key ] = value;
      }
    });
    this.search();
  }

  search() {
    const searchAddress = this.filterAddressArray.filter(address => address.value);
    const filterFunc = (item) => {
      return (searchAddress.length ? searchAddress.some(address => item.address.indexOf(address.name) !== -1) : true) &&
        (item.name.indexOf(this.searchValue) !== -1);
    };
    this.data = [ ...this.copyData.filter(item => filterFunc(item)) ];
    this.data = [ ...this.data.sort((a, b) => {
      if (a[ this.sortName ] > b[ this.sortName ]) {
        return (this.sortValue === 'ascend') ? 1 : -1;
      } else if (a[ this.sortName ] < b[ this.sortName ]) {
        return (this.sortValue === 'ascend') ? -1 : 1;
      } else {
        return 0;
      }
    }) ];
  }

  reset(array) {
    array.forEach(item => {
      item.value = false;
    });
    this.search();
  }
}
