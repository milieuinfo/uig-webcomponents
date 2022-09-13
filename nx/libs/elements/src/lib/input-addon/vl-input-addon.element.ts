import { define } from '@uig/common/utilities';
import { InputAddonBaseElementOfType } from './base/input-addon-base.element';
import './vl-button-input-addon.element';

/**
 * VlInput-addon
 * @class
 * @classdesc Gebruik de input-addon in combinatie met de vl-ui-input-group webcomponent. Deze combinatie zorgt ervoor
 *  dat de gebruiker extra informatie ontvangt over de inhoud of de vorm van de inhoud dat ingevuld moet worden.
 *
 * @extends HTMLParagraphElement
 * @mixes vlInputAddonElement
 */
export class VlInputAddonElement extends InputAddonBaseElementOfType(HTMLParagraphElement) {}

define('vl-input-addon', VlInputAddonElement, { extends: 'p' });
