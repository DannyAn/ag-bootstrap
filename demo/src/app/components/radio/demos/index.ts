
import { NgbdRadioGroup } from './group/radio-group';
import { NgbdRadioGroupDisabled} from './group-disabled/radio-group-disabled';

export const DEMO_DIRECTIVES =
[NgbdRadioGroup,NgbdRadioGroupDisabled];

export const DEMO_SNIPPETS = {
'group': {
'code': require('!!prismjs-loader?lang=typescript!./group/radio-group'),
'markup': require('!!prismjs-loader?lang=markup!./group/radio-group.html')
},
'group-disabled': {
    'code': require('!!prismjs-loader?lang=typescript!./group-disabled/radio-group-disabled'),
    'markup': require('!!prismjs-loader?lang=markup!./group-disabled/radio-group-disabled.html')
    }
};