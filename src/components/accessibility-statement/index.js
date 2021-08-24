import { html, LitElement } from "lit";
import "./components/accessibility-limitation";
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
import { COMPLIANCE_STATUS } from "./enums";
import styles from "./styles.scss";

export class VlAccessibility extends LitElement {
  static get properties() {
    return {
      version: { type: String },
      application: { type: String },
      date: { type: String },
      dateModified: { type: String },
      compliance: { type: String },
      limitations: {
        type: String,
      },
      evaluation: { type: String },
    };
  }

  constructor() {
    super();
    this.version = "1.0.0";
    this.application = "deze applicatie";
    this.date = "20 juli 2021";
    this.dateModified = "20 juli 2021";
    this.compliance = COMPLIANCE_STATUS.PARTIALLY_COMPLIANT;
  }

  render() {
    this.limitationsArray = JSON.parse(
      document.getElementById(this.limitations).innerHTML
    );
    const props = {
      version: this.version,
      date: this.date,
      application: this.application,
      evaluation: this.evaluation,
      compliance: this.compliance,
      limitationsArray: this.limitationsArray,
      dateModified: this.dateModified,
    };

    return html`<style>
        ${styles}
      </style>
      ${header()} ${title(props)} ${content(props)}`;
  }
}

customElements.define("vl-accessibility-statement", VlAccessibility);
