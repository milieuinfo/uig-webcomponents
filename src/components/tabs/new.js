import { html, css, LitElement, unsafeCSS, nothing } from 'lit';
import './components/vl-tabs-pane/new';
import styles from './styles.scss';

export class VlTabsNew extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return {
      activeTab: { type: String, attribute: 'data-vl-active-tab', reflect: true },
    };
  }

  _handleClick(event, tabId) {
    event.preventDefault();
    this.activeTab = tabId;
  }

  _handleFocus(tabId) {
    this.activeTab = tabId;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'activeTab':
          this.dispatchEvent(new CustomEvent('change', { detail: { activeTab: this.activeTab }, composed: true }));
          break;

        default:
          break;
      }
    });
  }

  render() {
    const children = [...this.children];

    return html`<div data-vl-tabs data-vl-tabs-responsive-label="Navigatie">
      <div class="vl-tabs__wrapper">
        <ul class="vl-tabs" data-vl-tabs-list role="tablist">
          ${children.map(
            (child) =>
              html`
                <li class="vl-tab" data-vl-id=${child.tabId}>
                  <a
                    href=${`#${child.tabId}`}
                    class="vl-tab__link"
                    data-vl-tab
                    role="tab"
                    id=${child.tabId}
                    tabindex=${child.tabId === this.activeTab ? '0' : '-1'}
                    @click=${(event) => this._handleClick(event, child.tabId)}
                    @focus=${() => this._handleFocus(child.tabId)}
                    >${child.title}</a
                  >
                </li>
              `,
          )}
        </ul>
        <button type="button" data-vl-tabs-toggle aria-expanded="false" class="vl-tabs__toggle" data-vl-close="false">
          <span>Navigatie</span>
        </button>
      </div>

      ${children.map((child) => {
        const name = `item-${child.tabId}`;
        child.setAttribute('slot', name);
        return html`
          <section
            class="vl-col--1-1 vl-tab__pane"
            data-vl-tab-pane
            tabindex="0"
            role="tabpanel"
            id=${`${child.tabId}-pane`}
            hidden="hidden"
            aria-labelledby=${`${child.tabId}-pane-tab`}
            data-vl-show="true"
          >
            <div class="vl-typography">
              <slot name=${name}></slot>
            </div>
          </section>
        `;
      })}
    </div> `;
  }
}

customElements.define('vl-tabs-new', VlTabsNew);
