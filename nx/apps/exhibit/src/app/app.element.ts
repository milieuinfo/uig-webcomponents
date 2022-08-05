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
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-app', AppElement);
