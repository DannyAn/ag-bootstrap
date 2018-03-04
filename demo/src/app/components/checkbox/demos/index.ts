
import { NgbdCheckboxBasic } from './basic/checkbox-basic';
import { NgbdCheckboxDisabled } from './disabled/checkbox-disabled';
import { NgbdCheckboxController } from './controller/checkbox-controller';
import { NgbdCheckboxGroup } from './group/checkbox-group';
import { NgbdCheckboxIndeterminate } from './indeterminate/checkbox-indeterminate';


export const DEMO_DIRECTIVES =
    [NgbdCheckboxBasic, NgbdCheckboxDisabled, NgbdCheckboxController, NgbdCheckboxGroup, NgbdCheckboxIndeterminate];

export const DEMO_SNIPPETS = {
    'basic': {
        'code': require('!!prismjs-loader?lang=typescript!./basic/checkbox-basic'),
        'markup': require('!!prismjs-loader?lang=markup!./basic/checkbox-basic.html')
    },
    'disabled': {
        'code': require('!!prismjs-loader?lang=typescript!./disabled/checkbox-disabled'),
        'markup': require('!!prismjs-loader?lang=markup!./disabled/checkbox-disabled.html')
    },
    'controller': {
        'code': require('!!prismjs-loader?lang=typescript!./controller/checkbox-controller'),
        'markup': require('!!prismjs-loader?lang=markup!./controller/checkbox-controller.html')
    },
    'group': {
        'code': require('!!prismjs-loader?lang=typescript!./group/checkbox-group'),
        'markup': require('!!prismjs-loader?lang=markup!./group/checkbox-group.html')
    },
    'indeterminate': {
        'code': require('!!prismjs-loader?lang=typescript!./indeterminate/checkbox-indeterminate'),
        'markup': require('!!prismjs-loader?lang=markup!./indeterminate/checkbox-indeterminate.html')
    }
};