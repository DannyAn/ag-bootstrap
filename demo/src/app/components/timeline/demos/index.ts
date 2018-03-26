
import { NgbdTimelineBasic } from './basic/timeline-basic';
import { NgbdTimelineColor } from './color/timeline-color';
import { NgbdTimelineCustom } from './custom/timeline-custom';
import { NgbdTimelinePending } from './pending/timeline-pending';


export const DEMO_DIRECTIVES =
    [NgbdTimelineBasic, NgbdTimelineColor, NgbdTimelineCustom, NgbdTimelinePending];

export const DEMO_SNIPPETS = {
    'basic': {
        'code': require('!!prismjs-loader?lang=typescript!./basic/timeline-basic'),
        'markup': require('!!prismjs-loader?lang=markup!./basic/timeline-basic.html')
    },
    'color': {
        'code': require('!!prismjs-loader?lang=typescript!./color/timeline-color'),
        'markup': require('!!prismjs-loader?lang=markup!./color/timeline-color.html')
    },
    'custom': {
        'code': require('!!prismjs-loader?lang=typescript!./custom/timeline-custom'),
        'markup': require('!!prismjs-loader?lang=markup!./custom/timeline-custom.html')
    },
    'pending': {
        'code': require('!!prismjs-loader?lang=typescript!./pending/timeline-pending'),
        'markup': require('!!prismjs-loader?lang=markup!./pending/timeline-pending.html')
    }
};