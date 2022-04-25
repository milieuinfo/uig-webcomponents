export const matomo = {
  scriptId: 'vl-cookie-consent-matomo-script',
  piwikScriptId: 'vl-cookie-consent-matomo-piwik-script',
  developUrl: '//stats-ontwikkel.milieuinfo.be/',
  previewUrl: '//stats-oefen.milieuinfo.be/',
  productionUrl: '//stats.milieuinfo.be/',
};

const { developUrl, previewUrl, productionUrl } = matomo;

const projects = [
  {
    id: 1,
    environments: [
      { url: 'stats-ontwikkel.milieuinfo.be', matomoUrl: developUrl },
      { url: 'stats-oefen.milieuinfo.be', matomoUrl: previewUrl },
    ],
  },
  {
    id: 2,
    environments: [
      { url: 'ontwikkel.milieuinfo.be', matomoUrl: developUrl },
      { url: 'oefen.ruimtemonitor.be', matomoUrl: previewUrl },
    ],
  },
  {
    id: 3,
    environments: [
      { url: 'omgevingsloket2-ontwikkel.omgeving.vlaanderen.be', matomoUrl: developUrl },
      { url: 'omgevingsloket-oefen.omgeving.vlaanderen.be', matomoUrl: previewUrl },
    ],
  },
  {
    id: 4,
    environments: [{ url: 'omgevingsloket2-oefen.omgeving.vlaanderen.be', matomoUrl: previewUrl }],
  },
  {
    id: 5,
    environments: [{ url: 'bredero-ontwikkel.ruimteinfo.be', matomoUrl: developUrl }],
  },
  {
    id: 6,
    environments: [{ url: 'bredero-bupo-ontwikkel.ruimteinfo.be', matomoUrl: developUrl }],
  },
  {
    id: 7,
    environments: [{ url: 'bredero-xfr-ontwikkel.ruimteinfo.be', matomoUrl: developUrl }],
  },
  {
    id: 8,
    environments: [
      { url: 'ontwikkel.ruimtemonitor.be', matomoUrl: developUrl },
      { url: 'vsm-oefen.milieuinfo.be', matomoUrl: previewUrl },
    ],
  },
  {
    id: 9,
    environments: [
      { url: 'rupadviestoets-ontwikkel.milieuinfo.be', matomoUrl: developUrl },
      { url: 'rupadviestoets-oefen.milieuinfo.be', matomoUrl: previewUrl },
      { url: 'vsm.milieuinfo.be', matomoUrl: productionUrl },
    ],
  },
  {
    id: 10,
    environments: [{ url: 'zendantennes-oefen.milieuinfo.be', matomoUrl: previewUrl }],
  },
  {
    id: 11,
    environments: [{ url: 'rupadviestoets.milieuinfo.be', matomoUrl: productionUrl }],
  },
  {
    id: 12,
    environments: [
      { url: 'www2-oefen.omgeving.vlaanderen.be', matomoUrl: previewUrl },
      { url: 'zendantennes.milieuinfo.be', matomoUrl: productionUrl },
    ],
  },
  {
    id: 13,
    environments: [{ url: 'zendantennes-ontwikkel.milieuinfo.be', matomoUrl: developUrl }],
  },
  {
    id: 14,
    environments: [
      { url: 'omgevingsloket-ontwikkel.omgeving.vlaanderen.be', matomoUrl: developUrl },
      { url: 'mobiscore-oefen.omgeving.vlaanderen.be', matomoUrl: previewUrl },
      { url: 'omgevingsloket.omgeving.vlaanderen.be', matomoUrl: productionUrl },
    ],
  },
  {
    id: 16,
    environments: [
      { url: 'vsm-ontwikkel.milieuinfo.be', matomoUrl: developUrl },
      { url: 'erkenningencontactgegevens-oefen.omgeving.vlaanderen.be', matomoUrl: previewUrl },
    ],
  },
  {
    id: 22,
    environments: [{ url: 'mobiscore-ontwikkel.omgeving.vlaanderen.be', matomoUrl: developUrl }],
  },
  {
    id: 23,
    environments: [{ url: 'loket-erkenningen-leefmilieu-oefen.omgeving.vlaanderen.be', matomoUrl: previewUrl }],
  },
  {
    id: 24,
    environments: [
      { url: 'erkenningencontactgegevens-ontwikkel.omgeving.vlaanderen.be', matomoUrl: developUrl },
      { url: 'bed-oefen.omgeving.vlaanderen.be', matomoUrl: previewUrl },
    ],
  },
  {
    id: 27,
    environments: [{ url: 'www2.omgeving.vlaanderen.be', matomoUrl: productionUrl }],
  },
  {
    id: 29,
    environments: [{ url: 'mobiscore.omgeving.vlaanderen.be', matomoUrl: productionUrl }],
  },
  {
    id: 30,
    environments: [
      { url: 'loket-erkenningen-leefmilieu-ontwikkel.omgeving.vlaanderen.be', matomoUrl: developUrl },
      { url: 'ruimtelijkeordening.be', matomoUrl: productionUrl },
    ],
  },
  {
    id: 31,
    environments: [
      { url: 'bed-ontwikkel.omgeving.vlaanderen.be', matomoUrl: developUrl },
      { url: 'complexeprojecten.be', matomoUrl: productionUrl },
    ],
  },
  {
    id: 32,
    environments: [{ url: 'rsv.ruimtevlaanderen.be', matomoUrl: productionUrl }],
  },
  {
    id: 33,
    environments: [{ url: 'ena.ruimtevlaanderen.be', matomoUrl: productionUrl }],
  },
  {
    id: 44,
    environments: [{ url: 'erkenningencontactgegevens.omgeving.vlaanderen.be', matomoUrl: productionUrl }],
  },
  {
    id: 52,
    environments: [{ url: 'loket-erkenningen-leefmilieu.omgeving.vlaanderen.be', matomoUrl: productionUrl }],
  },
  {
    id: 55,
    environments: [{ url: 'bed.omgeving.vlaanderen.be', matomoUrl: productionUrl }],
  },
];

const findProject = () => {
  let projectObject;
  projects.forEach((project) => {
    const environment = project.environments.find(({ url }) => url === window.location.host);
    if (environment) {
      projectObject = { id: project.id, url: environment.matomoUrl };
    }
  });

  return projectObject;
};

export const getScript = () => {
  const project = findProject();
  const element = document.createElement('script');
  element.setAttribute('id', matomo.scriptId);
  if (project) {
    const script = document.createTextNode(
      `` +
        `if (!window._paq) {` +
        `var _paq = window._paq || [];` +
        `_paq.push(['trackPageView']);` +
        `_paq.push(['enableLinkTracking']);` +
        `(function() {` +
        `var u='${project.url}';` +
        `_paq.push(['setTrackerUrl', u+'piwik.php']);` +
        `_paq.push(['setSiteId', ${project.id}]);` +
        `var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];` +
        `g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; g.id='${matomo.piwikScriptId}'; s.parentNode.insertBefore(g,s);` +
        `})();` +
        `` +
        `var currentUrl = window.location.href;` +
        `window.addEventListener('hashchange', function() {` +
        `_paq.push(['setReferrerUrl', currentUrl]);` +
        `currentUrl = '' + window.location.hash.substr(1);` +
        `_paq.push(['setCustomUrl', currentUrl]);` +
        `_paq.push(['setDocumentTitle', document.title]);` +
        `_paq.push(['deleteCustomVariables', 'page']);` +
        `_paq.push(['setGenerationTimeMs', 0]);` +
        `_paq.push(['trackPageView']);` +
        `var content = document.getElementById('content');` +
        `_paq.push(['MediaAnalytics::scanForMedia', content]);` +
        `_paq.push(['FormAnalytics::scanForForms', content]);` +
        `_paq.push(['trackContentImpressionsWithinNode', content]);` +
        `_paq.push(['enableLinkTracking']);` +
        `});` +
        `}`,
    );
    element.appendChild(script);
  }
  return element;
};
