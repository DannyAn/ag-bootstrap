
import { NgbdDropDownBasic } from './basic/nzdropdown-basic';
import { NgbdDropDownButton} from './button/nzdropdown-button';
import { NgbdDropDownCascading} from './cascading/nzdropdown-cascading';
import { NgbdDropDownClick} from './click/nzdropdown-click';
import { NgbdDropDownHide } from './hide/nzdropdown-hide';
import { NgbdDropDownOther } from './other/nzdropdown-other';
import { NgbdDropDownPosition } from './position/nzdropdown-position';
import { NgbdDropDownTrigger } from './trigger/nzdropdown-trigger';

export const DEMO_DIRECTIVES =
[NgbdDropDownBasic,NgbdDropDownButton,NgbdDropDownCascading,NgbdDropDownClick,NgbdDropDownHide
    ,NgbdDropDownOther,NgbdDropDownPosition,NgbdDropDownTrigger];

export const DEMO_SNIPPETS = {
'basic': {
'code': require('!!prismjs-loader?lang=typescript!./basic/nzdropdown-basic'),
'markup': require('!!prismjs-loader?lang=markup!./basic/nzdropdown-basic.html')
},
'button': {
    'code': require('!!prismjs-loader?lang=typescript!./button/nzdropdown-button'),
    'markup': require('!!prismjs-loader?lang=markup!./button/nzdropdown-button.html')
    },
'cascading': {
    'code': require('!!prismjs-loader?lang=typescript!./cascading/nzdropdown-cascading'),
    'markup': require('!!prismjs-loader?lang=markup!./cascading/nzdropdown-cascading.html')
    },
    'click': {
        'code': require('!!prismjs-loader?lang=typescript!./click/nzdropdown-click'),
        'markup': require('!!prismjs-loader?lang=markup!./click/nzdropdown-click.html')
        },
    'hide': {
        'code': require('!!prismjs-loader?lang=typescript!./hide/nzdropdown-hide'),
        'markup': require('!!prismjs-loader?lang=markup!./hide/nzdropdown-hide.html')
        },
    'other': {
        'code': require('!!prismjs-loader?lang=typescript!./other/nzdropdown-other'),
        'markup': require('!!prismjs-loader?lang=markup!./other/nzdropdown-other.html')
        },
    'position': {
            'code': require('!!prismjs-loader?lang=typescript!./position/nzdropdown-position'),
            'markup': require('!!prismjs-loader?lang=markup!./position/nzdropdown-position.html')
            },
            'trigger': {
                    'code': require('!!prismjs-loader?lang=typescript!./trigger/nzdropdown-trigger'),
                    'markup': require('!!prismjs-loader?lang=markup!./trigger/nzdropdown-trigger.html')
                    }
};