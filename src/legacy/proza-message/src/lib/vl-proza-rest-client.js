export class ProzaRestClient {
  static saveMessage(domain, code, text) {
    return fetch(`proza/domein/${domain}/${code}`, {
      method: 'PUT',
      body: text,
    })
      .then((response) => ProzaRestClient.__handleError(response))
      .then((message) => message.tekst)
      .catch((error) => {
        console.error(
          `Er is iets fout gelopen bij het bewaren van het Proza bericht voor {domein: ${domain}, code: ${code}}`,
          error,
        );
        return Promise.reject(error);
      });
  }

  static getMessage(domain, code) {
    return ProzaRestClient.__fetchJson(`proza/domein/${domain}/${code}`)
      .then((message) => message.tekst)
      .catch((error) => {
        console.error(
          `Er is iets fout gelopen bij het ophalen van het Proza bericht voor {domein: ${domain}, code: ${code}}`,
          error,
        );
        return Promise.reject(error);
      });
  }

  static getMessages(domain) {
    return ProzaRestClient.__fetchJson(`proza/domein/${domain}`)
      .then((messages) => Object.assign({}, ...messages.map((message) => ({ [message.code]: message.tekst }))))
      .catch((error) => {
        console.error(`Er is iets fout gelopen bij het ophalen van de Proza berichten voor domein ${domain}`, error);
        return Promise.reject(error);
      });
  }

  static getToegelatenOperaties(domain) {
    return ProzaRestClient.__fetchJson(`proza/domein/${domain}/toegelatenoperaties`).catch((error) => {
      console.error(
        `Er is iets fout gelopen bij het ophalen van de toegelaten Proza operaties voor domein ${domain}`,
        error,
      );
      return Promise.reject(error);
    });
  }

  static __fetchJson(url) {
    return fetch(url).then(ProzaRestClient.__handleError);
  }

  static __handleError(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(`Response geeft aan dat er een fout is: ${response.statusText}`);
    }
  }
}
