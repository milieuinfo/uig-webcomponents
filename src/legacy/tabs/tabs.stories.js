import { html } from 'lit-html';
import { stylesheet, docsIntro } from '../../../.storybook/utils';
import './index';
import linkStyles from '../../components/link/styles.scss';

export default {
  title: 'legacy/vl-tabs',
  decorators: [(story) => html`${stylesheet(linkStyles)} ${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'tabs',
          intro:
            "Use tab navigation to break related information into smaller chuncks of content. When working with tabs, some content is hidden. Therefore it's important to label the tabs wisely, allowing the user to know exactly what to expect in a tab. On mobile, tab navigation is transformed into a dropdown menu.",
          isLegacy: true,
        }),
      },
    },
  },
};

export const Default = () => html`<a
  is="vl-link"
  target="_blank"
  data-vl-inline
  href="https://webcomponenten.omgeving.vlaanderen.be/doc/VlTabs.html"
>
  Legacy docs <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-link></span
></a>`;
