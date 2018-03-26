
import { NgbdStepsBasic } from './basic/steps-basic';
import { NgbdStepsChange } from './change/steps-change';
import { NgbdStepsDotted } from './dotted/steps-dotted';
import { NgbdStepsError } from './error/steps-error';
import { NgbdStepsIcon } from './icon/steps-icon';
import { NgbdStepsMini } from './mini/steps-mini';
import { NgbdStepsVertical } from './vertical/steps-vertical';
import { NgbdStepsVerticalMini } from './vertical-mini/steps-vertical-mini';


export const DEMO_DIRECTIVES =
    [NgbdStepsBasic, NgbdStepsChange, NgbdStepsDotted, NgbdStepsError, NgbdStepsIcon, NgbdStepsMini, NgbdStepsVertical, NgbdStepsVerticalMini];
export const DEMO_SNIPPETS = {
    'basic': {
        'code': require('!!prismjs-loader?lang=typescript!./basic/steps-basic'),
        'markup': require('!!prismjs-loader?lang=markup!./basic/steps-basic.html')
    },
    'change': {
        'code': require('!!prismjs-loader?lang=typescript!./change/steps-change'),
        'markup': require('!!prismjs-loader?lang=markup!./change/steps-change.html')
    },
    'dotted': {
        'code': require('!!prismjs-loader?lang=typescript!./dotted/steps-dotted'),
        'markup': require('!!prismjs-loader?lang=markup!./dotted/steps-dotted.html')
    },
    'error': {
        'code': require('!!prismjs-loader?lang=typescript!./error/steps-error'),
        'markup': require('!!prismjs-loader?lang=markup!./error/steps-error.html')
    },
    'icon': {
        'code': require('!!prismjs-loader?lang=typescript!./icon/steps-icon'),
        'markup': require('!!prismjs-loader?lang=markup!./icon/steps-icon.html')
    },
    'mini': {
        'code': require('!!prismjs-loader?lang=typescript!./mini/steps-mini'),
        'markup': require('!!prismjs-loader?lang=markup!./mini/steps-mini.html')
    },
    'vertical': {
        'code': require('!!prismjs-loader?lang=typescript!./vertical/steps-vertical'),
        'markup': require('!!prismjs-loader?lang=markup!./vertical/steps-vertical.html')
    },
    'vertical-mini': {
        'code': require('!!prismjs-loader?lang=typescript!./vertical-mini/steps-vertical-mini'),
        'markup': require('!!prismjs-loader?lang=markup!./vertical-mini/steps-vertical-mini.html')
    }
};