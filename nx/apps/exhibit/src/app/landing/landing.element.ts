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
          <vl-button></vl-button>
        </div>
      </div>
    </div>
      `;
  }
}

customElements.define('exhibit-landing', LandingElement);
