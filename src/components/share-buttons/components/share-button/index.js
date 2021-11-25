import { html, LitElement } from 'lit';
import { MEDIA } from '../../enums';

export class VlShareButton extends LitElement {
  static get properties() {
    return {
      medium: { type: String, attribute: 'data-vl-medium', reflect: true },
      href: { type: String, attribute: 'href', reflect: true },
    };
  }

  constructor() {
    super();
    this.media = {
      [MEDIA.FACEBOOK]: 'Facebook',
      [MEDIA.TWITTER]: 'Twitter',
      [MEDIA.LINKED_IN]: 'LinkedIn',
      [MEDIA.GOOGLE_PLUS]: 'Google Plus',
      [MEDIA.MAIL]: 'mail',
    };
  }

  render() {
    const name = this.media[this.medium];
    return html`<a href=${this.href} class="vl-share-button vl-share-button--${this.medium}" title="Deel op ${name}">
      <i class="vl-vi vl-vi-${this.medium}" aria-hidden="true"></i>
      ${name}
    </a>`;
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define('vl-share-button', VlShareButton);
