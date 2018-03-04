import {NgbdButtonsCheckbox} from './checkbox/buttons-checkbox';
import {NgbdButtonsCheckboxreactive} from './checkboxreactive/buttons-checkboxreactive';
import {NgbdButtonsRadio} from './radio/buttons-radio';
import {NgbdButtonsRadioreactive} from './radioreactive/buttons-radioreactive';
import { NgbdButtonsBasic } from './basic/buttons-basic';

export const DEMO_DIRECTIVES = [NgbdButtonsBasic,NgbdButtonsCheckbox, NgbdButtonsCheckboxreactive, NgbdButtonsRadio, NgbdButtonsRadioreactive];

export const DEMO_SNIPPETS = {
  'basic': {
    'code': require('!!prismjs-loader?lang=typescript!./basic/buttons-basic'),
    'markup': require('!!prismjs-loader?lang=markup!./basic/buttons-basic.html')},
    'checkbox': {
      'code': require('!!prismjs-loader?lang=typescript!./checkbox/buttons-checkbox'),
      'markup': require('!!prismjs-loader?lang=markup!./checkbox/buttons-checkbox.html')},  
  'checkboxreactive': {
    'code': require('!!prismjs-loader?lang=typescript!./checkboxreactive/buttons-checkboxreactive'),
      'markup': require('!!prismjs-loader?lang=markup!./checkboxreactive/buttons-checkboxreactive.html')},
  'radio': {
    'code': require('!!prismjs-loader?lang=typescript!./radio/buttons-radio'),
    'markup': require('!!prismjs-loader?lang=markup!./radio/buttons-radio.html')},
  'radioreactive': {
    'code': require('!!prismjs-loader?lang=typescript!./radioreactive/buttons-radioreactive'),
    'markup': require('!!prismjs-loader?lang=markup!./radioreactive/buttons-radioreactive.html')}
};
