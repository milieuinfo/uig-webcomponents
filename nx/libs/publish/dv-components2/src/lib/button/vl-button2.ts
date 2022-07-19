import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style2 from './styling2.scss';

@customElement('vl-button2')
export class VlButton2 extends LitElement {
  @property({ type: Boolean })
  noShadowDom = false;

  // static get styles() {
  //   console.log('hallo wereld', style2);
  //   return [style2];
  // }
  static get styles() {
    // console.log('hallo werelåd', style2);
    return [
      css`
        ${unsafeCSS(style2)}
      `,
    ];
  }
  // static styles = [style2]

  // static styles = css`
  //   p {
  //     background-color: green;
  //   }
  // `;

  createRenderRoot() {
    console.log('hallo wereld', style2);
    return this.noShadowDom ? this : super.createRenderRoot();
  }

  render() {
    // throw new Error("bugje");
    return html`<p class="test">
      Hello from my template. shadowDom=${!this.noShadowDom}
    </p>`;
  }
}
