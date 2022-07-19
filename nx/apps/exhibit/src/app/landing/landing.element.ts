import './landing.element.scss';

export class LandingElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'landing';
    this.innerHTML = `
    <div class="wrapper">
      <div class="container">
        <!--  WELCOME  -->
        <div id="welcome">
          <h1>
            <span> Welcome to the landing page ! </span>
            Welcome ${title} 👋
          </h1>
          <vl-button2>geen shadow dom</vl-button2>
          <uig-table>
            <uig-row noShadowDom>
              <uig-cell noShadowDom style="background-color: blue">cell-1</uig-cell>
              <uig-cell noShadowDom>cell-2</uig-cell>
              <uig-cell noShadowDom>cell-3</uig-cell>
            </uig-row>
          </uig-table>
          <button slot="actions" is="vl-button" id="b1" data-vl-error data-vl-wide>Fout melden</button>
        </div>
      </div>
    </div>
      `;
  }
}

  // ?disabled=${wrapProps.disabled}
  //     ?data-vl-error=${wrapProps.error}
  //       ?data-vl-block=${wrapProps.block}
  //         ?data-vl-large=${wrapProps.large}
  //           ?data-vl-wide=${wrapProps.wide}
  //             ?data-vl-narrow=${wrapProps.narrow}
  //               ?data-vl-loading=${wrapProps.loading}
  //                 ?data-vl-secondary=${wrapProps.secondary}
  //                   ?data-vl-tertiary=${wrapProps.tertiary}


customElements.define('exhibit-landing', LandingElement);
