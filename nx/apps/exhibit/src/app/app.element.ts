export class AppElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'exhibit';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h1>Elementen Overzicht UIG</h1>
                    <br>
                    <exhibit-buttons></exhibit-buttons>
                    <exhibit-breadcrumb></exhibit-breadcrumb>
                    <exhibit-introduction></exhibit-introduction>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-app', AppElement);
