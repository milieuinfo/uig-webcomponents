import { define, vlElement} from '@uig/common/utilities';

export class VlTabComponent extends vlElement(HTMLLIElement) {
  static get is() {
    return 'vl-tab';
  }

  static get _observedAttributes() {
    return ['href', 'id'];
  }

  constructor() {
    super();
    this._processClasses();
    this._processLinkElement();
  }

  get id() {
    return this.getAttribute('id');
  }

  get __linkElement() {
    return this.querySelector('.vl-tab__link');
  }

  get __linkElementTemplate() {
    return this._template(`<a class="vl-tab__link" data-vl-tab role="tab"></a>`);
  }

  get isActive() {
    return this.classList.contains('vl-tab--active');
  }

  /**
   * Activeer de tab.
   */
  activate() {
    this.__linkElement.click();
  }

  _processClasses() {
    this.classList.add('vl-tab');
  }

  _processLinkElement() {
    const a = this.__linkElementTemplate.firstElementChild;
    const slot = this.querySelector('slot');
    a.appendChild(slot);
    a.addEventListener('click', () => this.__dispatchActiveTabChangedEvent());
    this.appendChild(a);
  }

  __dispatchActiveTabChangedEvent() {
    if (!this.isActive) {
      this.dispatchEvent(new CustomEvent('change', { detail: { activeTab: this.id }, composed: true }));
    }
  }

  _hrefChangedCallback(oldValue: string, newValue: string) {
    this.__linkElement.setAttribute('href', newValue);
    this.__linkElement.setAttribute('aria-controls', `${newValue}-pane`);
  }

  _idChangedCallback(oldValue: string, newValue: string) {
    this.__linkElement.id = newValue;
  }
}

define(VlTabComponent.is, VlTabComponent, { extends: 'li' });
