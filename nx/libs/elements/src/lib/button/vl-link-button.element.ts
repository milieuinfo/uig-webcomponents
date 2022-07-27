import { define } from '@uig/common/utilities';
import { vlButtonBaseElement } from './base/vl-button-base.element';

/**
 * VlLinkButton
 * @class
 * @classdesc Gebruik de vl-link-button om een CTA toe te voegen.
 *
 * @extends HTMLAnchorElement
 */
export class VlLinkButtonElement extends vlButtonBaseElement(HTMLAnchorElement) {}

define('vl-link-button', VlLinkButtonElement, { extends: 'a' });
