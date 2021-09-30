import { html, LitElement, css, unsafeCSS } from "lit";
import "../functional-header";
import "../grid";
import "../titles";
import "../introduction";
import "../icon";
import "../typography";
import "../link";
import "../side-navigation";
import "../properties";
import "../infoblock";
import "../contact-card";
import { header, title, content } from "./templates";
import { COMPLIANCE_STATUS, EVALUATION_STATUS } from "./enums";
import styles from "./styles.scss";

const props = {
  version: "data-vl-version",
  application: "data-vl-application",
  date: "data-vl-date",
  dateModified: "data-vl-date-modified",
  compliance: "data-vl-compliance",
  limitations: "data-vl-limitations",
  evaluation: "data-vl-evaluation",
};

const {
  version,
  application,
  date,
  dateModified,
  compliance,
  limitations,
  evaluation,
} = props;

export class VlAccessibility extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }
  static get properties() {
    return {
      [version]: { type: String },
      [application]: { type: String },
      [date]: { type: String },
      [dateModified]: { type: String },
      [compliance]: { type: String },
      [limitations]: {
        type: String,
      },
      [evaluation]: { type: String },
    };
  }

  constructor() {
    super();
    this[version] = "1.0.0";
    this[application] = "deze applicatie";
    this[date] = "20 juli 2021";
    this[dateModified] = "20 juli 2021";
    this[compliance] = COMPLIANCE_STATUS.PARTIALLY_COMPLIANT;
    this[evaluation] = EVALUATION_STATUS.NOT_EVALUATED;
  }

  render() {
    const limitationsScript = document.getElementById(this[limitations]);
    const props = {
      version: this[version],
      date: this[date],
      application: this[application],
      evaluation: this[evaluation],
      compliance: this[compliance],
      parsedLimitations:
        limitationsScript && JSON.parse(limitationsScript.innerHTML),
      dateModified: this[dateModified],
    };

    return html`${header()} ${title(props)} ${content(props)}`;
  }
}

customElements.define("vl-accessibility", VlAccessibility);
