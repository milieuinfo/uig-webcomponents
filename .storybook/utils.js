import { html } from 'lit-html';

export const bodySimulation = (component, withClass) => html`<div
  is="vl-body"
  class=${withClass ? 'vl-u-sticky-gf' : ''}
>
  ${component}
</div>`;

export const stylesheet = (styles) =>
  html`<style>
    ${styles}
  </style>`;

export const removeStorybooksDefaultStyling = () => {
  document.querySelector('.sbdocs-p').classList = 'sbdocs sbdocs-p';
  document.querySelector('.sbdocs-content').style.maxWidth = 'initial';
  document.querySelector('.sbdocs-wrapper').style.padding = '0';
};

export const docsIntro = ({ stylesheets, root, intro, utils }) => {
  const basePath = 'uig-webcomponents/lib/components/';
  const componentImport = `${'`'}import "${basePath}${root}"${'`'}`;
  const styleImports = stylesheets?.map(
    (stylesheet) => `<br/>${'`'}import "${basePath}${stylesheet}/styles.css"${'`'}`,
  );
  const utilsImports = utils?.map(
    (util) =>
      `<br/><br/>${'`'}import ${'{'} ${util.name} ${'}'} "${basePath}${root}/utils"${'`'}<br/><br/>${util.description}`,
  );

  const brIntro = intro ? `<br/><br/>${intro}` : '';
  return `${componentImport}${styleImports || ''}${brIntro}${utilsImports || ''}`;
};

export const CATEGORIES = {
  ATTRIBUTES: 'Attributes',
  PROPERTIES: 'Properties',
  EVENTS: 'Events',
  SLOTS: 'Slots',
};

export const TYPES = {
  BOOLEAN: 'boolean',
  ARRAY: 'array',
  STRING: 'string',
};

export const wrapWidth = '780px';
