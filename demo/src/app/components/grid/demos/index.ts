
import { NgbdGridBasic } from './basic/grid-basic';
import { NgbdGridFlex} from './flex/grid-flex';
import { NgbdGridFlexAlign } from './flex-align/grid-flex-align';
import { NgbdGridFlexOrder } from './flex-order/grid-flex-order';
import {NgbdGridGutter} from './gutter/grid-gutter';
import { NgbdGridGutterConfig } from './gutter-config/grid-gutter-config';
import { NgbdGridOffset } from './offset/grid-offset';
import { NgbdGridSort } from './sort/grid-sort';
import {NgbdGridResponsive} from './responsive/grid-responsive';
import {NgbdGridResponsiveMore} from './responsive-more/grid-responsive-more';

export const DEMO_DIRECTIVES =
[NgbdGridBasic,NgbdGridFlex,NgbdGridFlexAlign,NgbdGridFlexOrder,NgbdGridGutter,NgbdGridGutterConfig,NgbdGridOffset,NgbdGridSort,NgbdGridResponsive,NgbdGridResponsiveMore];

export const DEMO_SNIPPETS = {
'basic': {
'code': require('!!prismjs-loader?lang=typescript!./basic/grid-basic'),
'markup': require('!!prismjs-loader?lang=markup!./basic/grid-basic.html')
},
'flex': {
    'code': require('!!prismjs-loader?lang=typescript!./flex/grid-flex'),
    'markup': require('!!prismjs-loader?lang=markup!./flex/grid-flex.html')
    },
'flex-align': {
    'code': require('!!prismjs-loader?lang=typescript!./flex-align/grid-flex-align'),
    'markup': require('!!prismjs-loader?lang=markup!./flex-align/grid-flex-align.html')
    },
    'flex-order': {
        'code': require('!!prismjs-loader?lang=typescript!./flex-order/grid-flex-order'),
        'markup': require('!!prismjs-loader?lang=markup!./flex-order/grid-flex-order.html')
        },
    'gutter': {
        'code': require('!!prismjs-loader?lang=typescript!./gutter/grid-gutter'),
        'markup': require('!!prismjs-loader?lang=markup!./gutter/grid-gutter.html')
        },
    'gutter-config': {
        'code': require('!!prismjs-loader?lang=typescript!./gutter-config/grid-gutter-config'),
        'markup': require('!!prismjs-loader?lang=markup!./gutter-config/grid-gutter-config.html')
        },
    'offset': {
        'code': require('!!prismjs-loader?lang=typescript!./offset/grid-offset'),
        'markup': require('!!prismjs-loader?lang=markup!./offset/grid-offset.html')
        },
    'sort': {
        'code': require('!!prismjs-loader?lang=typescript!./sort/grid-sort'),
        'markup': require('!!prismjs-loader?lang=markup!./sort/grid-sort.html')
        },
    'responsive': {
        'code': require('!!prismjs-loader?lang=typescript!./responsive/grid-responsive'),
        'markup': require('!!prismjs-loader?lang=markup!./responsive/grid-responsive.html')
        },
    'responsive-more': {
            'code': require('!!prismjs-loader?lang=typescript!./responsive-more/grid-responsive-more'),
            'markup': require('!!prismjs-loader?lang=markup!./responsive-more/grid-responsive-more.html')
            },
};