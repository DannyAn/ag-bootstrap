
import { NgbdTransferAdvanced } from './advanced/transfer-advanced';
import { NgbdTransferBasic } from './basic/transfer-basic';
import { NgbdTransferCustomItem } from './custom-item/transfer-custom-item';
import { NgbdTransferCanMove } from './can-move/transfer-can-move';
import { NgbdTransferSearch } from './search/transfer-search';

export const DEMO_DIRECTIVES =
[NgbdTransferAdvanced,NgbdTransferBasic,NgbdTransferCustomItem,NgbdTransferCanMove,NgbdTransferCanMove,NgbdTransferSearch];

export const DEMO_SNIPPETS = {
'basic': {
'code': require('!!prismjs-loader?lang=typescript!./basic/transfer-basic'),
'markup': require('!!prismjs-loader?lang=markup!./basic/transfer-basic.html')
},
'advanced': {
    'code': require('!!prismjs-loader?lang=typescript!./advanced/transfer-advanced'),
    'markup': require('!!prismjs-loader?lang=markup!./advanced/transfer-advanced.html')
    },
'custom-item': {
    'code': require('!!prismjs-loader?lang=typescript!./custom-item/transfer-custom-item'),
    'markup': require('!!prismjs-loader?lang=markup!./custom-item/transfer-custom-item.html')
    },
'can-move': {
    'code': require('!!prismjs-loader?lang=typescript!./can-move/transfer-can-move'),
    'markup': require('!!prismjs-loader?lang=markup!./can-move/transfer-can-move.html')
    },
'search': {
    'code': require('!!prismjs-loader?lang=typescript!./search/transfer-search'),
    'markup': require('!!prismjs-loader?lang=markup!./search/transfer-search.html')
    }
};