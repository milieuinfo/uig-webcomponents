import { html } from 'lit-html';
import './vl-form-message.element';

export default {
    title: 'Elements`/vl-form-annotation',
};


export const Default = () => html`
    <p is="vl-form-annotation" data-cy="form-annotation">De naam van het evenement moet minstens 12 karakters tellen.</p>
`;

export const AsSpan = () => html`
  <span is="vl-form-annotation-span" data-cy="form-annotation-span">De naam van het evenement moet minstens 12 karakters tellen.</span>
`;

