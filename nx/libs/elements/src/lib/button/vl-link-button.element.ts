import { define } from '@uig/common/utilities';
import { vlButtonBaseElement } from './base/vl-button-base.element';

/**
 * VlLinkButton
 * @class
 * @classdesc Gebruik de vl-link-button om een CTA toe te voegen.
 *
 * @extends HTMLAnchorElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-link.html|Demo}
 */
export class VlLinkButtonElement extends vlButtonBaseElement(HTMLAnchorElement) {}

define('vl-link-button', VlLinkButtonElement, { extends: 'a' });
