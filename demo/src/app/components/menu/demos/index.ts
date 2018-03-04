
import { NgbdMenuBasic } from './basic/menu-basic';
import { NgbdMenuCollapsed} from './collapsed/menu-collapsed';
import { NgbdMenuDynamic} from './dynamic/menu-dynamic';
import { NgbdMenuExpand} from './expand/menu-expand';
import { NgbdMenuInline } from './inline/menu-inline';
import { NgbdMenuTheme } from './theme/menu-theme';
import { NgbdMenuVertical } from './vertical/menu-vertical';

export const DEMO_DIRECTIVES =
[NgbdMenuBasic,NgbdMenuCollapsed,NgbdMenuDynamic,NgbdMenuExpand,NgbdMenuInline,NgbdMenuTheme,NgbdMenuVertical];

export const DEMO_SNIPPETS = {
'basic': {
'code': require('!!prismjs-loader?lang=typescript!./basic/menu-basic'),
'markup': require('!!prismjs-loader?lang=markup!./basic/menu-basic.html')
},
'collapsed': {
    'code': require('!!prismjs-loader?lang=typescript!./collapsed/menu-collapsed'),
    'markup': require('!!prismjs-loader?lang=markup!./collapsed/menu-collapsed.html')
    },
'dynamic': {
    'code': require('!!prismjs-loader?lang=typescript!./dynamic/menu-dynamic'),
    'markup': require('!!prismjs-loader?lang=markup!./dynamic/menu-dynamic.html')
    },
    'expand': {
        'code': require('!!prismjs-loader?lang=typescript!./expand/menu-expand'),
        'markup': require('!!prismjs-loader?lang=markup!./expand/menu-expand.html')
        },
    'inline': {
        'code': require('!!prismjs-loader?lang=typescript!./inline/menu-inline'),
        'markup': require('!!prismjs-loader?lang=markup!./inline/menu-inline.html')
        },
    'theme': {
        'code': require('!!prismjs-loader?lang=typescript!./theme/menu-theme'),
        'markup': require('!!prismjs-loader?lang=markup!./theme/menu-theme.html')
        },
        'vertical': {
            'code': require('!!prismjs-loader?lang=typescript!./vertical/menu-vertical'),
            'markup': require('!!prismjs-loader?lang=markup!./vertical/menu-vertical.html')
            }
};