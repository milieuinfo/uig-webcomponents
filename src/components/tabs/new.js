import { html, css, LitElement, unsafeCSS, nothing } from 'lit';
import './components/vl-tabs-pane/new';
// import '@govflanders/vl-ui-tabs';
import './lib';
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
      selected: { type: String, attribute: 'data-vl-selected', reflect: true },
    };
  }

  render() {
    const children = [...this.children];
    const selectedChild = children.find((child) => child.tabId === this.selected);

    console.log(selectedChild);

    return html`<div data-vl-tabs data-vl-tabs-responsive-label="Navigatie">
      <div class="vl-tabs__wrapper">
        <div class="vl-tabs" data-vl-tabs-list role="tablist">
          ${children.map(
            (child, index) => html`
              <button
                @click=${() => {
                  this.selected = child.tabId;
                }}
                class="vl-tab"
                id=${index}
                role="tab"
                data-vl-tab
                aria-controls=${index}
                href="#vl-tab-nummer-1"
              >
                ${child.title}
              </button>
            `,
          )}
        </div>
        <button type="button" data-vl-tabs-toggle aria-expanded="false" class="vl-tabs__toggle" data-vl-close="false">
          <span>Navigatie</span>
        </button>
      </div>

      <section
        class="vl-col--1-1 vl-tab__pane"
        data-vl-tab-pane
        tabindex="0"
        role="tabpanel"
        id="vl-tab-nummer-1-pane"
        hidden="hidden"
        aria-labelledby="vl-tab-nummer-1"
        data-vl-show="true"
      >
        <div class="vl-title-wrapper vl-title-wrapper--cta">
          <h3 class="vl-title vl-title--h3 vl-title-wrapper__title vl-title-wrapper--cta__title">Trein</h3>
        </div>
        <div class="vl-typography">
          ${children.map((child, index) => {
            const name = `item-${index}`;
            child.setAttribute('slot', name);
            return html`${child.tabId === this.selected ? html`<slot name=${name}></slot>` : nothing}`;
          })}
        </div>
      </section>
    </div>`;
  }
}

customElements.define('vl-tabs-new', VlTabsNew);
