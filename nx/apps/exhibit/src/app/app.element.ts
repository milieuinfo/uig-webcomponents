import "./app.element.scss";
export class AppElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'exhibit';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h1 is="vl-h1" data-vl-alt data-vl-no-space-bottom>Elementen Overzicht UIG</h1>
                    <exhibit-buttons></exhibit-buttons>
                    <exhibit-breadcrumb></exhibit-breadcrumb>
                    <exhibit-introduction></exhibit-introduction>
                    <exhibit-titles></exhibit-titles>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-app', AppElement);
