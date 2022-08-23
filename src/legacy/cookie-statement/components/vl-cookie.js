import {vlElement, define} from '../../../utils/core';
import '../../../components/properties';
import '../../../components/typography';
import styles from '../styles.scss';
import propertiesStyles from '../../../components/properties/styles.scss';

export class VlCookie extends vlElement(HTMLElement) {
  constructor({title, name, purpose, domain, processor, validity} = {}) {
    super(`
        <style>
          ${styles}
          ${propertiesStyles}
        </style>
    `);

    const nameTemplate = () => {
      const _name = name || this.dataset.vlName;
      if (Array.isArray(_name)) {
        return `
            <vl-typography>
                <ul>
                    ${_name.map((name) => `<li>${name}</li>`).join('')}
                </ul>
            </vl-typography>
          `;
      } else {
        return _name;
      }
    };

    this._element.insertAdjacentHTML('afterend', `
        <vl-properties>
            <h3>${title || this.dataset.vlTitle}</h3>
            <dl is="vl-properties-list">
                <dt is="vl-property-term">Naam</dt>
                <dd is="vl-property-value">${nameTemplate()}</dd>
                <dt is="vl-property-term">Doel</dt>
                <dd is="vl-property-value">${purpose || this.dataset.vlPurpose}</dd>
                <dt is="vl-property-term">Type</dt>
                <dd is="vl-property-value">Cookie</dd>
                <dt is="vl-property-term">Domein</dt>
                <dd is="vl-property-value">${domain || this.dataset.vlDomain}</dd>
                <dt is="vl-property-term">Verwerker</dt>
                <dd is="vl-property-value">${processor || this.dataset.vlProcessor}</dd>
                <dt is="vl-property-term">Geldigheid</dt>
                <dd is="vl-property-value">${validity || this.dataset.vlValidity}</dd>
            </dl>
        </vl-properties>
    `);
  }
}

define('vl-cookie', VlCookie);
