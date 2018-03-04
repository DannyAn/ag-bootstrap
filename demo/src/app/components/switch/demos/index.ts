
import { NgbdSwitchBasic } from './basic/switch-basic';
import { NgbdSwitchDisabled} from './disabled/switch-disabled';
import { NgbdSwitchSize } from './size/switch-size';
import { NgbdSwitchText } from './text/switch-text';

export const DEMO_DIRECTIVES =
[NgbdSwitchBasic,NgbdSwitchDisabled,NgbdSwitchSize,NgbdSwitchText];

export const DEMO_SNIPPETS = {
'basic': {
'code': require('!!prismjs-loader?lang=typescript!./basic/switch-basic'),
'markup': require('!!prismjs-loader?lang=markup!./basic/switch-basic.html')
},
'disabled': {
    'code': require('!!prismjs-loader?lang=typescript!./disabled/switch-disabled'),
    'markup': require('!!prismjs-loader?lang=markup!./disabled/switch-disabled.html')
    },
'size': {
    'code': require('!!prismjs-loader?lang=typescript!./size/switch-size'),
    'markup': require('!!prismjs-loader?lang=markup!./size/switch-size.html')
    },
'text': {
    'code': require('!!prismjs-loader?lang=typescript!./text/switch-text'),
    'markup': require('!!prismjs-loader?lang=markup!./text/switch-text.html')
    },
};