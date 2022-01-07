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

export const docsIntro = ({ stylesheets, root, intro }) => {
  const componentImport = `${'`'}import "uig-webcomponents/lib/components/${root}"${'`'}`;
  const styleImports =
    stylesheets &&
    stylesheets.map(
      (stylesheet) => `<br/>${'`'}import "uig-webcomponents/lib/components/${stylesheet}/styles.css"${'`'}`,
    );
  const brIntro = `<br/><br/>${intro}`;
  return stylesheets ? `${componentImport}${styleImports}${brIntro}` : `${componentImport}${brIntro}`;
};

export const CATEGORIES = {
  ATTRIBUTES: 'Attributes',
  PROPERTIES: 'Properties',
  EVENTS: 'Events',
  SLOTS: 'Slots',
};
