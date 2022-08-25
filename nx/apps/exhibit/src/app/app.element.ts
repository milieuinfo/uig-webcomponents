import "./app.element.scss";
export class AppElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h1 is="vl-h1" data-vl-alt data-vl-no-space-bottom>Elementen Overzicht UIG</h1>
                    <exhibit-buttons></exhibit-buttons>
                    <exhibit-breadcrumb></exhibit-breadcrumb>
                    <exhibit-introduction></exhibit-introduction>
                    <exhibit-titles></exhibit-titles>
                    <exhibit-image></exhibit-image>
                    <exhibit-typography></exhibit-typography>
                    <exhibit-icon></exhibit-icon>
                    <exhibit-link></exhibit-link>
                    <exhibit-text></exhibit-text>
                    <exhibit-form></exhibit-form>
                    <exhibit-form-group></exhibit-form-group>
                    <exhibit-form-grid></exhibit-form-grid>
                    <exhibit-grid></exhibit-grid>
                    <exhibit-input-field></exhibit-input-field>
                    <exhibit-input-addon></exhibit-input-addon>
                    <exhibit-input-group></exhibit-input-group>
                    <exhibit-link-list></exhibit-link-list>
                    <exhibit-data-table></exhibit-data-table>
                    <exhibit-action-group></exhibit-action-group>
                    <exhibit-doormat></exhibit-doormat>
                    <exhibit-infotext></exhibit-infotext>
                    <exhibit-search-filter></exhibit-search-filter>
                    <exhibit-search-results></exhibit-search-results>
                    <exhibit-select></exhibit-select>
                    <exhibit-multiselect></exhibit-multiselect>
                    <!--<exhibit-side-navigation></exhibit-side-navigation>-->

                    <h1 is="vl-h1" data-vl-alt data-vl-no-space-bottom>Componenten Overzicht UIG</h1>
                    <exhibit-alert></exhibit-alert>
                    <exhibit-contact-card></exhibit-contact-card>
                    <exhibit-properties></exhibit-properties>
                    <exhibit-infoblock></exhibit-infoblock>
                    <exhibit-content-header></exhibit-content-header>
                    <exhibit-document></exhibit-document>
                    <exhibit-functional-header></exhibit-functional-header>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-app', AppElement);
