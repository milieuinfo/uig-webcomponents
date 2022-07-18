
import { html } from 'lit-html';
import '../../components/link';
import '../../components/data-table';
import '../rich-data-table';
import linkStyles from '../../components/link/styles.scss';
import tableStyles from '../../components/data-table/styles.scss';
import { docsIntro, stylesheet } from '../../../.storybook/utils.js';

export default {
  title: 'legacy/vl-rich-data-table',
  decorators: [
    (story) =>
      html`
        ${stylesheet(`${linkStyles}${tableStyles}`)}${story()}
      `,
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'rich-data-table',
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
  href="https://webcomponenten.omgeving.vlaanderen.be/doc/VlRichDataTable.html"
>
  Legacy docs <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-link></span
></a>`;

export const Test = () => {
  const data =
    '{"data": [{ "id" : 0, "name" : "Project #1" , "owner" : "Jan Jansens" }, { "id" : 1, "name" : "Project #2" , "owner" : "Jan Jansens" }]}';

  const tableSorter = (table) => {
    const originalTableData = [...table.data.data];
    return (event) => {
      const {sorting} = event.detail;
      const table = event.target;
      if (sorting) {
        table.data = {
          data: [...originalTableData].sort((firstEl, secondEl) => {
            for (let i = 0; i < sorting.length; i++) {
              const criteria = sorting[i];
              const firstValue = firstEl[criteria.name];
              const secondValue = secondEl[criteria.name];
              const isAscending = criteria.direction === 'asc';
              if (firstValue < secondValue) {
                return isAscending ? -1 : 1;
              } else if (firstValue > secondValue) {
                return isAscending ? 1 : -1;
              }
            }
            return 0;
          }),
          sorting ,
        };
      } else {
        table.data = originalTableData;
      }
    };
  };
  customElements.whenDefined('vl-rich-data-table').then(() => {
    const table = document.querySelector('#rich-data-table-sorting');
    table.addEventListener('change', tableSorter(table));
  });

  return html`
    <vl-rich-data-table id="rich-data-table-sorting" data-vl-data="${data}">
      <vl-rich-data-field
        data-vl-name="id"
        data-vl-label="ID"
        data-vl-selector="id"
        data-vl-sortable=""
        data-vl-sorting-direction="asc"
      ></vl-rich-data-field>
      <vl-rich-data-field
        data-vl-name="name"
        data-vl-label="Naam"
        data-vl-selector="name"
        data-vl-sortable=""
      ></vl-rich-data-field>
      <vl-rich-data-field data-vl-name="owner" data-vl-selector="owner" data-vl-sortable="">
        <template slot="label">
          <span>Eigenaar</span>
        </template>
      </vl-rich-data-field>
    </vl-rich-data-table>
  `;
};