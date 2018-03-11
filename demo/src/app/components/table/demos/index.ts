
import { NgbdTableBasic } from './basic/table-basic';
import { NgbdTableExpand } from './expand/table-expand';
import { NgbdTableExpandTree } from './expand-tree/table-expand-tree';
import { NgbdTableEdit } from './edit/table-edit';
import { NgbdTableFixedHeader } from './fixed-header/table-fixed-header';
import { NgbdTableColspanRowspan } from './span/table-colspan-rowspan';
import { NgbdTableResetFilter } from './reset-filter/table-reset-filter';
import { NgbdTableCustomFilter } from './custom-filter/table-custom-filter';
import { NgbdTableSelection } from './selection/table-selection';
import { NgbdTableSelectionAndOperation } from './selection-and-operation/table-selection-and-operation';
import { NgbdTableSelectionProps } from './selection-props/table-selection-props';
import { NgbdTablePaging } from './paging/table-paging';
import { NgbdTableAjax } from './ajax/table-ajax';
import { NgbdTableNoPagination } from './nopagination/table-nopagination';
import { NgbdTableSize } from './size/table-size';

export const DEMO_DIRECTIVES =
    [NgbdTableBasic, NgbdTableExpand, NgbdTableExpandTree, NgbdTableFixedHeader, NgbdTableColspanRowspan,
        NgbdTableResetFilter, NgbdTableCustomFilter, NgbdTableSelection, NgbdTableSelectionAndOperation, NgbdTableSelectionProps,
        NgbdTablePaging, NgbdTableAjax, NgbdTableNoPagination, NgbdTableSize, NgbdTableEdit
    ];
export const DEMO_SNIPPETS = {
    'basic': {
        'code': require('!!prismjs-loader?lang=typescript!./basic/table-basic'),
        'markup': require('!!prismjs-loader?lang=markup!./basic/table-basic.html')
    },
    'ajax': {
        'code': require('!!prismjs-loader?lang=typescript!./ajax/table-ajax'),
        'markup': require('!!prismjs-loader?lang=markup!./ajax/table-ajax.html')
    },
    'edit': {
        'code': require('!!prismjs-loader?lang=typescript!./edit/table-edit'),
        'markup': require('!!prismjs-loader?lang=markup!./edit/table-edit.html')
    },
    'expand': {
        'code': require('!!prismjs-loader?lang=typescript!./expand/table-expand'),
        'markup': require('!!prismjs-loader?lang=markup!./expand/table-expand.html')
    },
    'expand-tree': {
        'code': require('!!prismjs-loader?lang=typescript!./expand-tree/table-expand-tree'),
        'markup': require('!!prismjs-loader?lang=markup!./expand-tree/table-expand-tree.html')
    },
    'fixed-header': {
        'code': require('!!prismjs-loader?lang=typescript!./fixed-header/table-fixed-header'),
        'markup': require('!!prismjs-loader?lang=markup!./fixed-header/table-fixed-header.html')
    },
    'custom-filter': {
        'code': require('!!prismjs-loader?lang=typescript!./custom-filter/table-custom-filter'),
        'markup': require('!!prismjs-loader?lang=markup!./custom-filter/table-custom-filter.html')
    },
    'nopagination': {
        'code': require('!!prismjs-loader?lang=typescript!./nopagination/table-nopagination'),
        'markup': require('!!prismjs-loader?lang=markup!./nopagination/table-nopagination.html')
    },
    'paging': {
        'code': require('!!prismjs-loader?lang=typescript!./paging/table-paging'),
        'markup': require('!!prismjs-loader?lang=markup!./paging/table-paging.html')
    },
    'size': {
        'code': require('!!prismjs-loader?lang=typescript!./size/table-size'),
        'markup': require('!!prismjs-loader?lang=markup!./size/table-size.html')
    },
    'span': {
        'code': require('!!prismjs-loader?lang=typescript!./span/table-colspan-rowspan'),
        'markup': require('!!prismjs-loader?lang=markup!./span/table-colspan-rowspan.html')
    },

    'reset-filter': {
        'code': require('!!prismjs-loader?lang=typescript!./reset-filter/table-reset-filter'),
        'markup': require('!!prismjs-loader?lang=markup!./reset-filter/table-reset-filter.html')
    },
    'selection': {
        'code': require('!!prismjs-loader?lang=typescript!./selection/table-selection'),
        'markup': require('!!prismjs-loader?lang=markup!./selection/table-selection.html')
    },
    'selection-and-operation': {
        'code': require('!!prismjs-loader?lang=typescript!./selection-and-operation/table-selection-and-operation'),
        'markup': require('!!prismjs-loader?lang=markup!./selection-and-operation/table-selection-and-operation.html')
    },
    'selection-props': {
        'code': require('!!prismjs-loader?lang=typescript!./selection-props/table-selection-props'),
        'markup': require('!!prismjs-loader?lang=markup!./selection-props/table-selection-props.html')
    }
};