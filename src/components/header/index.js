import { LitElement } from "lit";
import { awaitScript } from "../../utils/core";

awaitScript(
  "vl-header-client",
  "https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-polyfill/dist/index.js"
)
  .then(() => {
    awaitScript(
      "vl-header-polyfill",
      "https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-client/dist/index.js"
    ).finally(() => {
      customElements.define("vl-header", VlHeader);
    });
  })
  .catch(() => {
    customElements.define("vl-header", VlHeader);
  });

const props = {
  development: "data-vl-development",
  identifier: "data-vl-identifier",
};
const { development, identifier } = props;

export class VlHeader extends LitElement {
  static get properties() {
    return {
      [identifier]: { type: String },
      [development]: { type: Boolean },
    };
  }

  constructor() {
    super();
  }

  injectHeader() {
    const vlBody = document.querySelector('[is="vl-body"]');
    (vlBody || document.body).insertAdjacentHTML(
      "afterbegin",
      '<div id="header"></div>'
    );
  }

  vlwHeader() {
    return document.querySelector("div[class=vlw__header]");
  }

  header() {
    return document.querySelector("#header");
  }

  async __isUserAuthenticated() {
    const response = await fetch("/LoggedInUser");
    return response.status === 200;
  }

  loadWidget() {
    const widgetUrl = this[development]
      ? `https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/${this[identifier]}`
      : `https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/widget/${this[identifier]}`;

    window.vl.widget.client
      .bootstrap(widgetUrl)
      .then((widget) => {
        this.injectHeader();
        widget.setMountElement(document.getElementById("header"));
        widget.mount().catch((e) => console.error(e));
        return widget;
      })
      .then((widget) => {
        widget.getExtension("citizen_profile.session").then(async (session) => {
          session.configure({
            active: await this.__isUserAuthenticated(),
            endpoints: {
              loginUrl: "/aanmelden",
              loginRedirectUrl: "/",
              logoutUrl: "/afgemeld",
              switchCapacityUrl: "/wissel_organisatie",
            },
          });
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  render() {
    if (this.vlwHeader()) {
      this.vlwHeader().parentElement.remove();
    }
    if (this.header()) {
      this.header().remove();
    }
    this.loadWidget();
    this.injectHeader();
  }

  createRenderRoot() {
    return this;
  }
}
