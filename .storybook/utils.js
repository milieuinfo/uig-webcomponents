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

export const docsIntro = ({ stylesheets, root, intro, utils, isLegacy }) => {
  const basePath = `uig-webcomponents/lib/${isLegacy ? 'legacy' : 'components'}/`;
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
  CHILD_ATTRIBUTES: 'Child attributes',
  METHODS: 'Methods',
};

export const TYPES = {
  BOOLEAN: 'boolean',
  ARRAY: 'array',
  STRING: 'string',
  NUMBER: 'number',
};

export const wrapWidth = '780px';

// Use these functions to get an element in storybook.
// Needed for stories in the docs tab, because storybook can render the canvas en doc tab at the same time in the DOM when in the doc tab,
// thus the element is rendered multiple times. Because this only happens in the doc tab, we can take the last element that is found.

export const getLastElement = (element) => {
  const [lastItem] = [...document.querySelectorAll(element)].slice(-1);
  return lastItem;
};

// Make sure the class that is given is unique and is not being used in other stories of the component.
export const getLastElementByClassName = (className) => {
  const items = document.getElementsByClassName(className);
  return items[items.length - 1];
};
