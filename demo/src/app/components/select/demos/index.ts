
import { NgbdSelectBasic } from './basic/select-basic';
import { NgbdSelectMultiple } from './multiple/select-multiple';
import { NgbdSelectMultipleChange } from './multiple-change/select-multiple-change';
import { NgbdSelectPagination } from './pagination/select-pagination';
import { NgbdSelectSearch } from './search/select-search';
import { NgbdSelectSearchChange } from './search-change/select-search-change';
import { NgbdSelectSize } from './size/select-size';
import { NgbdSelectTag } from './tag/select-tag';
import {NgbdSelectTemplate} from './template/select-template';


export const DEMO_DIRECTIVES =
    [NgbdSelectBasic, NgbdSelectMultiple, NgbdSelectMultipleChange, NgbdSelectPagination, NgbdSelectSearch,
        NgbdSelectSearchChange, NgbdSelectSize, NgbdSelectTag,NgbdSelectTemplate];

export const DEMO_SNIPPETS = {
    'basic': {
        'code': require('!!prismjs-loader?lang=typescript!./basic/select-basic'),
        'markup': require('!!prismjs-loader?lang=markup!./basic/select-basic.html')
    },
    'multiple': {
        'code': require('!!prismjs-loader?lang=typescript!./multiple/select-multiple'),
        'markup': require('!!prismjs-loader?lang=markup!./multiple/select-multiple.html')
    },
    'multiple-change': {
        'code': require('!!prismjs-loader?lang=typescript!./multiple-change/select-multiple-change'),
        'markup': require('!!prismjs-loader?lang=markup!./multiple-change/select-multiple-change.html')
    },
    'pagination': {
        'code': require('!!prismjs-loader?lang=typescript!./pagination/select-pagination'),
        'markup': require('!!prismjs-loader?lang=markup!./pagination/select-pagination.html')
    },
    'search': {
        'code': require('!!prismjs-loader?lang=typescript!./search/select-search'),
        'markup': require('!!prismjs-loader?lang=markup!./search/select-search.html')
    },
    'search-change': {
        'code': require('!!prismjs-loader?lang=typescript!./search-change/select-search-change'),
        'markup': require('!!prismjs-loader?lang=markup!./search-change/select-search-change.html')
    },
    'size': {
        'code': require('!!prismjs-loader?lang=typescript!./size/select-size'),
        'markup': require('!!prismjs-loader?lang=markup!./size/select-size.html')
    },
    'tag': {
        'code': require('!!prismjs-loader?lang=typescript!./tag/select-tag'),
        'markup': require('!!prismjs-loader?lang=markup!./tag/select-tag.html')
    },
    'template': {
        'code': require('!!prismjs-loader?lang=typescript!./template/select-template'),
        'markup': require('!!prismjs-loader?lang=markup!./template/select-template.html')
    }
};