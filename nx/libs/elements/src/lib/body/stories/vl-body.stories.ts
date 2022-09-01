import { html } from 'lit-html';
import '../vl-body.element';

export default {
    title: 'Elements/body',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const Default = () =>
    html`
        <!-- just shows usage -->
        <body is="vl-body" data-cy="body-default">
            <p>By using the native vl-body element incl. styling, a minimum of corporate identity will be loaded.</p>
        </body>
    `;
