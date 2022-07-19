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
          <button is="vl-button" data-vl-error data-vl-wide>Hallo UIG</button>
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
