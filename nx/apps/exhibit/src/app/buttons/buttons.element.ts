export class ButtonsElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Buttons';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <div id="welcome">
                        <h2>${title}</h2>
                        <br>
                        <button is="vl-button" data-vl-error data-vl-wide>UIG Button</button>
                        <a is="vl-link-button" data-vl-error data-vl-wide>UIG Link Button</a>
                        <br>
                        <button is="vl-button" disabled>UIG Button</button>
                        <button is="vl-button" data-vl-error>UIG Button</button>
                        <button is="vl-button" data-vl-block>UIG Button</button>
                        <button is="vl-button" data-vl-large>UIG Button</button>
                        <button is="vl-button" data-vl-wide>UIG Button</button>
                        <button is="vl-button" data-vl-narrow>UIG Button</button>
                        <button is="vl-button" data-vl-loading>UIG Button</button>
                        <button is="vl-button" data-vl-secondary>UIG Button</button>
                        <button is="vl-button" data-vl-tertiary>UIG Button</button>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-buttons', ButtonsElement);
