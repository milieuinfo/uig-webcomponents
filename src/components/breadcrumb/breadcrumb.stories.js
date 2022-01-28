import { html } from 'lit-html';
import styles from './styles.scss';
import { stylesheet } from '../../../.storybook/utils.js';
import '../breadcrumb';
import './via-children';

export default {
  title: 'native-elements/vl-breadcrumb',
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  args: { toggleBlock: false },
};

export const Default = ({ toggleBlock }) => html`<nav is="vl-breadcrumb" aria-label="U bent hier:">
  <ol>
    ${toggleBlock
      ? html` <li>
          <a href="#">Vlaanderen Intern</a>
        </li>`
      : null}

    <li>
      <a href="#">Regelgeving</a>
    </li>
    <li>
      <a href="#">Webuniversum</a>
    </li>
    <li>
      <a href="#">Componenten</a>
    </li>
  </ol>
</nav>`;

export const ViaChildren = ({ toggleBlock }) => html`<vl-breadcrumb-test>
  ${toggleBlock ? html`<vl-breadcrumb-item data-vl-href="#">Vlaanderen Intern</vl-breadcrumb-item>` : null}
  <vl-breadcrumb-item data-vl-href="#">Regelgeving</vl-breadcrumb-item>
  <vl-breadcrumb-item data-vl-href="https://google.be">Webuniversum</vl-breadcrumb-item>
  <vl-breadcrumb-item data-vl-href="#">Componenten</vl-breadcrumb-item>
</vl-breadcrumb-test>`;
