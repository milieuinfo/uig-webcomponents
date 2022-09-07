import { html } from 'lit-html';
import '../vl-infotext.element';

export default {
    title: 'Elements/vl-infotext',
    args: {
        badge: false,
    },
    argTypes: {
        badge: {
            name: 'data-vl-badge',
            type: { summary: 'boolean' },
            description: 'Attribute gets used to create a badge styling.',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

interface InfotextInterface {
    badge: string;
}

export const Default = ({ badge }: InfotextInterface) => html`
    <div is="vl-infotext" ?data-vl-badge=${badge} data-cy="infotext">
        <div>
            <div data-vl-value="">3200</div>
            <div data-vl-text="">Bezoekers per dag</div>
        </div>
    </div>
`;

export const WithLink = ({ badge }: InfotextInterface) => html`
    <div is="vl-infotext" ?data-vl-badge=${badge} data-cy="infotext-link">
        <a href="#">
            <div data-vl-value="">3200</div>
            <div data-vl-text="">Bezoekers per dag</div>
        </a>
    </div>
`;

export const WithComplexContent = () => html`
    <div is="vl-infotext" data-vl-badge data-cy="infotext-complex">
        <div>
            <div data-vl-value="">
                <span class="lengte-waarde" style="font-size: 1.25em;">150</span>
                <span class="eenheid-waarde" style="font-size: 1em;">cm</span>
            </div>
            <div data-vl-text="">
                <span class="lengte" style="font-size: 1.25em;">Lengte</span>
                <span class="eenheid" style="font-size: 1em;">(eenheid)</span>
            </div>
        </div>
    </div>
`;
