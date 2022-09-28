import {define, vlElement} from '../../../../utils/core/index.js';

import {VlTypography} from '../../../../components/typography';
import {VlProzaMessagePreloader} from './vl-proza-message-preloader.js';
import {ProzaRestClient} from './vl-proza-rest-client';

import elementStyles from './vl-proza-message.scss';
import buttonStyles from './../../../../components/button/styles.scss';

import '../../../../components/button';
import '../../../../components/icon';
import '../../../../components/text';

/**
 * VlProzaMessage
 * @class
 * @classdesc De vl-proza-message webcomponent kan gebruikt worden om teksten te laten beheren door de business.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {string} data-vl-domain - Het Proza domein waarin het Proza bericht zit.
 * @property {string} data-vl-code - De code die het Proza bericht identificeert.
 * @property {string} data-vl-block - Attribuut om aan te duiden dat de inhoud van het Proza bericht een block element is.
 * @property {string} data-vl-parameters - De key/value parameters die verwerkt en getoond zullen worden in het content element.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-proza-message/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-proza-message/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-proza-message.html|Demo}
 *
 */
export class VlProzaMessage extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['domain', 'code', 'block', 'parameters'];
  }

  constructor() {
    super();
    this.shadow(`
      <style>
        ${elementStyles}
        ${buttonStyles}
      </style>
      <div>
        <vl-typography></vl-typography>
      </div>
    `);
  }

  async connectedCallback() {
    if(await this.__updatenIsToegelaten()) {
      this.__setupUpdatableMessage();
    }
  }

  get _typographyElement() {
    return this.shadowRoot.querySelector('vl-typography');
  }

  get _actionsElement() {
    return this.shadowRoot.querySelector('#actions');
  }

  get _editButton() {
    return this.shadowRoot.querySelector('#edit-button');
  }

  get _refreshButton() {
    return this.shadowRoot.querySelector('#refresh-button');
  }

  _domainChangedCallback() {
    this._loadMessage();
  }

  _codeChangedCallback() {
    this._loadMessage();
  }

  _blockChangedCallback() {
    const blockClass = 'vl-proza-message__block';
    if (this.hasAttribute('data-vl-block')) {
      this.classList.add(blockClass);
    } else {
      this.classList.remove(blockClass);
    }
  }

  _parametersChangedCallback() {
    if (this._typographyElement && this._parameters) {
      this._typographyElement.dataset.vlParameters = this._parameters;
    }
  }

  get _domain() {
    return this.dataset.vlDomain;
  }

  get _code() {
    return this.dataset.vlCode;
  }

  get _parameters() {
    return this.dataset.vlParameters;
  }

  _loadMessage() {
    if (!!this._domain && !!this._code) {
      VlProzaMessage.getMessage(this._domain, this._code).then((message) => {
        this._typographyElement.innerHTML = message;
        if (this.__containsBlockElement(message)) {
          this.toggleAttribute('data-vl-block', true);
        } else {
          this.toggleAttribute('data-vl-block', false);
        }
      });
    } else {
      this._typographyElement.innerHTML = null;
    }
  }

  _reloadMessage() {
    VlProzaMessage.__getSingleMessage(this._domain, this._code, {forceUpdate: true});
    this._loadMessage();
  }

  /**
   * Geeft een Proza bericht terug.
   *
   * @param {string} domain Het Proza domein waarin het Proza bericht zit.
   * @param {string} code De code die het Proza bericht identificeert.
   * @param {object} [parameters] Eventuele parameters die gebruikt kunnen worden om placeholders in het Proza bericht te vervangen.
   * @return {Promise<string>} Resolved naar het Proza bericht indien teruggevonden en anders wordt de Promise rejected.
   */
  static async getMessage(domain, code, parameters) {
    const message = await VlProzaMessage.__getRawMessage(domain, code);

    if (parameters) {
      return VlTypography.replaceTemplateParameters(message, parameters);
    } else {
      return message;
    }
  }

  static async __getRawMessage(domain, code) {
    const messageCache = VlProzaMessage.__getMessageCacheForDomain(domain);

    if (messageCache[code]) {
      return messageCache[code];
    } else {
      try {
        return await VlProzaMessage.__getMessageFromPreloaderCache(domain, code);
      } catch (error) {
        console.info(error);
        return VlProzaMessage.__getSingleMessage(domain, code);
      }
    }
  }

  static __getMessageFromPreloaderCache(domain, code) {
    return VlProzaMessagePreloader.getMessage(domain, code).catch((error) => {
      if (VlProzaMessagePreloader.isPreloaded(domain)) {
        console.warn(
          `Bericht voor {domein: ${domain}, code: ${code}} kon niet opgevraagd worden uit de preload cache`,
          error,
        );
      }
      throw error;
    });
  }

  static __getSingleMessage(domain, code, options = {forceUpdate: false}) {
    const messageCache = VlProzaMessage.__getMessageCacheForDomain(domain);
    if (!messageCache[code] || (options && options.forceUpdate)) {
      VlProzaMessage._putMessageInCache(domain, code, options);
    }
    return messageCache[code];
  }

  static _putMessageInCache(domain, code, options) {
    VlProzaMessage.__getMessageCacheForDomain(domain)[code] = ProzaRestClient.getMessage(domain, code, options);
  }

  static _getToegelatenOperaties(domain) {
    let toegelatenOperatiesCache = VlProzaMessage.__getToegelatenOperatiesCacheForDomain(domain);
    if (!toegelatenOperatiesCache) {
      toegelatenOperatiesCache = ProzaRestClient.getToegelatenOperaties(domain);
      VlProzaMessage.__setToegelatenOperatiesCacheForDomain(domain, toegelatenOperatiesCache);
    }
    return toegelatenOperatiesCache;
  }

  static get __domainCache() {
    if (!VlProzaMessage.__cache) {
      VlProzaMessage.__cache = {};
    }
    return VlProzaMessage.__cache;
  }

  static __getCacheForDomain(domain) {
    const cache = VlProzaMessage.__domainCache;
    if (!cache[domain]) {
      cache[domain] = {};
    }
    return cache[domain];
  }

  static __getToegelatenOperatiesCacheForDomain(domain) {
    return VlProzaMessage.__getCacheForDomain(domain).toegelatenOperaties;
  }

  static __setToegelatenOperatiesCacheForDomain(domain, toegelatenOperaties) {
    VlProzaMessage.__getCacheForDomain(domain).toegelatenOperaties = toegelatenOperaties;
  }

  static __getMessageCacheForDomain(domain) {
    const cache = VlProzaMessage.__getCacheForDomain(domain);
    if (!cache.messages) {
      cache.messages = {};
    }
    return cache.messages;
  }

  __containsBlockElement() {
    return [...this._typographyElement.children].some((element) => {
      return ['block', 'inline-block', 'flex', 'grid', 'table'].includes(window.getComputedStyle(element)['display']);
    });
  }

  async __updatenIsToegelaten() {
    return (await VlProzaMessage._getToegelatenOperaties(this._domain)).update;
  }

  __setupUpdatableMessage() {
    this._element.classList.add('vl-proza-message--updatable');
    if(!this._actionsElement) {
      this._element.appendChild(this.__actionsElementTemplate());
      this._actionsElement.appendChild(this.__editButtonTemplate());
      this._actionsElement.appendChild(this.__refreshButtonTemplate());
    }
  }

  __actionsElementTemplate() {
    return this._template(`
        <div id="actions"></div>
    `);
  }

  __editButtonTemplate() {
    const button = this._template(`
        <button is="vl-button" id="edit-button">
            <span is="vl-icon" data-vl-icon="pencil"></span>
            <span is="vl-text" data-vl-visually-hidden>edit</span>
        </button>
    `);
    button.firstElementChild.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      window.open(`/proza/#domeinen/${this._domain}/codes/${this._code}`, '_blank');
    });
    return button
  }

  __refreshButtonTemplate() {
    const button = this._template(`
        <button is="vl-button" id="refresh-button" >
            <span is="vl-icon" data-vl-icon="text-redo"></span>
            <span is="vl-text" data-vl-visually-hidden>refresh</span>
        </button>
    `);
    button.firstElementChild.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      this._reloadMessage();
    });
    return button;
  }
}

define('vl-proza-message', VlProzaMessage, {});
