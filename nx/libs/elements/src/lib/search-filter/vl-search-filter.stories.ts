import { html } from 'lit-html';
import '../form/vl-form.element';
import '../button/vl-button.element';
import '../select/vl-select.element';
import '../input-field/vl-input-field.element';
import './vl-search-filter.element';
import '../link/vl-link.element';
import { args, argTypes } from './helper/vl-search-filter.stories-helper';

export default {
    title: 'Elements/vl-search-filter',
    args,
    argTypes,
};

interface TemplateInterface {
    title: string;
    alt: string;
    mobileModal: string;
    mobileModalTitle: string;
    maxWidth: string;
}

const Template = ({ title, alt, mobileModal, mobileModalTitle, maxWidth }: TemplateInterface) => html`
    <div style="max-width: ${maxWidth}">
        <div
            is="vl-search-filter"
            data-vl-title=${title}
            ?data-vl-alt=${alt}
            ?data-vl-mobile-modal=${mobileModal}
            data-vl-mobile-modal-title=${mobileModalTitle}
            data-cy="search-filter"
        >
            <form is="vl-form">
                <section>
                    <h2>Gegevens</h2>
                    <div>
                        <label is="vl-form-label" for="firstname">Voornaam</label>
                        <input
                            is="vl-input-field"
                            type="text"
                            name="firstname"
                            data-vl-block
                            autocomplete="given-name"
                        />
                    </div>
                    <div>
                        <label is="vl-form-label" for="name">Naam</label>
                        <input is="vl-input-field" type="text" name="name" data-vl-block autocomplete="family-name" />
                    </div>
                </section>
                <section>
                    <h2>Locatie</h2>
                    <div>
                        <label is="vl-form-label" for="vl-select-city">Stad</label>
                        <select
                            is="vl-select"
                            name="vl-select-default"
                            data-vl-select-deletable
                            data-vl-block
                            autocomplete="address-level2"
                        >
                            <option placeholder="">Kies een stad</option>
                            <option value="brussel">Brussel</option>
                            <option value="gent">Gent</option>
                        </select>
                    </div>
                    <div>
                        <label is="vl-form-label" for="vl-select-country">Land</label>
                        <select
                            is="vl-select"
                            name="vl-select-default"
                            data-vl-select-deletable
                            data-vl-block
                            autocomplete="country"
                        >
                            <option placeholder="">Kies een land</option>
                            <option value="belgië">België</option>
                        </select>
                    </div>
                </section>
                <div>
                    <button is="vl-button" type="submit">Zoeken</button>
                </div>
            </form>
            <div>
                <a href="#" is="vl-link">Zoekopdracht verwijderen</a>
            </div>
        </div>
    </div>
`;

// TODO kspeltin: 'as any' is een vuile fix
export const Default = Template.bind({}) as any;
export const Mobile = Template.bind({}) as any;

Default.argTypes = {
    mobileModal: {
        control: {
            disable: true,
        },
    },
    mobileModalTitle: {
        control: {
            disable: true,
        },
    },
};

Mobile.args = {
    mobileModal: true,
    mobileModalTitle: 'Mobile title',
};

Mobile.argTypes = {
    title: {
        control: {
            disable: true,
        },
    },
    mobileModal: {
        control: {
            disable: true,
        },
    },
};

Mobile.parameters = {
    viewport: {
        defaultViewport: 'mobile1',
    },
};
