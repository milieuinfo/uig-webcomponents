import { vlElement, define } from '../../../../utils/core';
import { ProzaRestClient } from '../../proza-rest-client';

export class VlProzaMessagePreloader extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['domain'];
  }

  constructor() {
    super();
    this._preload();
  }

  _domainChangedCallback() {
    this._preload();
  }

  get _domain() {
    return this.dataset.vlDomain;
  }

  _preload() {
    if (this._domain) {
      VlProzaMessagePreloader._preload(this._domain);
    }
  }

  static _preload(domain) {
    if (!VlProzaMessagePreloader.isPreloaded(domain)) {
      VlProzaMessagePreloader.__setPreloadedMessagesCacheForDomain(domain, ProzaRestClient.getMessages(domain));
    }
  }

  /**
   * Geeft een Proza bericht terug.
   *
   * @param {String} domain - Het Proza domein waarin het Proza bericht zit.
   * @param {String} code - De code die het Proza bericht identificeert.
   * @return {Promise<string>} Resolved naar het Proza bericht indien teruggevonden en anders wordt de Promise rejected.
   */
  static getMessage(domain, code) {
    return VlProzaMessagePreloader._getMessages(domain).then((messages) => {
      const message = messages[code];
      if (message) {
        return message;
      }
      throw Error(`Bericht voor {domein: ${domain}, code: ${code}} niet gevonden`);
    });
  }

  /**
   * Geeft de Proza codes terug op basis van een prefix.
   *
   * @param {String} domain - Het Proza domein waarin het Proza bericht zit.
   * @param {String} prefix - De prefix van de code die het Proza bericht
   * identificeert.
   * @return {Promise<[string]>} Resolved naar de Proza codes met de
   * opgegeven prefix
   */
  static async getProzaCodes(domain, prefix) {
    VlProzaMessagePreloader._preload(domain);
    const messages = await VlProzaMessagePreloader._getMessages(domain);
    return Object.keys(messages).filter((code) => code.startsWith(prefix));
  }

  /**
   * Geeft terug of het Proza domein al reeds preloaded werd.
   *
   * @param {String} domain - Het Proza domein.
   * @return {boolean}
   */
  static isPreloaded(domain) {
    return !!VlProzaMessagePreloader.__getPreloadedMessagesCacheForDomain(domain);
  }

  static _getMessages(domain) {
    if (VlProzaMessagePreloader.isPreloaded(domain)) {
      return VlProzaMessagePreloader.__getPreloadedMessagesCacheForDomain(domain);
    }
    return Promise.reject(new Error(`Berichten voor domein ${domain} zijn niet preloaded`));
  }

  static get __domainCache() {
    if (!VlProzaMessagePreloader.__cache) {
      VlProzaMessagePreloader.__cache = {};
    }
    return VlProzaMessagePreloader.__cache;
  }

  static __getCacheForDomain(domain) {
    const cache = VlProzaMessagePreloader.__domainCache;
    if (!cache[domain]) {
      cache[domain] = {};
    }
    return cache[domain];
  }

  static __getPreloadedMessagesCacheForDomain(domain) {
    return VlProzaMessagePreloader.__getCacheForDomain(domain).messages;
  }

  static __setPreloadedMessagesCacheForDomain(domain, messages) {
    VlProzaMessagePreloader.__getCacheForDomain(domain).messages = messages;
  }
}

define('vl-proza-message-preloader', VlProzaMessagePreloader);
