import './breadcrumb.element.scss';

export class BreadcrumbElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Breadcrumb';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <div id="welcome">
                        <h2>${title}</h2>
                        <br>
                        <vl-breadcrumb>
                            <vl-breadcrumb-item data-vl-href="#">Vlaanderen Intern</vl-breadcrumb-item>
                            <vl-breadcrumb-item data-vl-href="#">Regelgeving</vl-breadcrumb-item>
                            <vl-breadcrumb-item data-vl-href="#">Webuniversum</vl-breadcrumb-item>
                            <vl-breadcrumb-item data-vl-href="#">Componenten</vl-breadcrumb-item>
                        </vl-breadcrumb>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-breadcrumb', BreadcrumbElement);
